import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";
import gsap from "gsap";

const About = () => {
  const [screenSize, setScreenSize] = useState(null);
  const [toggleAnimation, setToggleAnimation] = useState(false);
  window.onload = () => {
    setScreenSize({
      width: document.getElementById("bubbleContainer").clientWidth,
      height: document.getElementById("bubbleContainer").clientHeight,
    });

    const bubbles = document.getElementsByClassName("bubble");
    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      bubble.addEventListener("mouseenter", (e) => {
        setToggleAnimation(true);
        console.log("enter");
      });
      bubble.addEventListener("mouseleave", (e) => {
        setToggleAnimation(false);
        console.log("leave");
      });
    }
  };

  window.addEventListener("resize", (e) => {
    setScreenSize({
      width: document.getElementById("bubbleContainer").clientWidth,
      height: document.getElementById("bubbleContainer").clientHeight,
    });
  });

  useEffect(() => {
    if (screenSize) {
      const ctx = gsap.context(() => {
        gsap.to(".bubble", {
          x: `random(-${screenSize.width / 2 - 60},${
            screenSize.width / 2 - 60
          },5)`, //chooses a random number between -20 and 20 for each target, rounding to the closest 5!
          y: `random(0,-${screenSize.height - 60},5)`,
          rotate: `random(-360,360)`,
          duration: 1,
          ease: "none",
          repeat: -1,
          paused: toggleAnimation,
          repeatRefresh: true, // gets a new random x and y value on each repeat
        });
      });

      return () => {
        ctx.revert();
      };
    }
  }, [screenSize, toggleAnimation]);

  return (
    <div className="aboutPage section" id="aboutMe">
      <h1 className="heading">About me</h1>
      <div className="aboutContainer">
        <div className="aboutTools" id="bubbleContainer">
          <div className="aboutText">
            <p>
              I am a Full Stack Developer with a passion for building beautiful
              and user- friendly websites. I have a strong understanding of both
              front-end and back- end development, and I am excited to put my
              skills to use in a professional setting. I am a quick learner and
              a team player, and I am confident that I can be a valuable asset
              to any web development team.
            </p>
          </div>
          <Bubbles text="React" />
          <Bubbles text="Git" />
          <Bubbles text="Node js" />
          <Bubbles text="JavaScript" />
          <Bubbles text="CSS" />
          <Bubbles text="Bootstrap" />
          <Bubbles text="Mongo" />
          <Bubbles text="Gsap" />
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import Bubbles from "./Bubbles";

const About = () => {
    const [score, setScore] = useState(0);
  useEffect(() => {
    const bubbles = document.getElementsByClassName("bubble");
    for (let i = 0; i < bubbles.length; i++) {
      const bubble = bubbles[i];
      bubble.addEventListener("mouseleave", () => {
        setScore((value)=>{
            return value += 1;
        });
        bubble.style.zIndex = -13;
        setTimeout(() => {
        }, 500);
        setTimeout(() => {
          bubble.style.zIndex = 1;
        }, 2000);
      });
      bubble.addEventListener("animationend", () => {
        changePosition(bubble);
      });
    }

    function changePosition(bubble) {
      bubble.style.animationName = "none";

      requestAnimationFrame(() => {
        bubble.style.animationName = "";
      });
      const bubbleStyle = getComputedStyle(bubble);

      var curX = bubbleStyle.getPropertyValue("--xB");
      var curY = bubbleStyle.getPropertyValue("--yB");

      bubble.style.setProperty("--xA", curX);
      bubble.style.setProperty("--yA", curY);

      bubble.style.setProperty(
        "--xB",
        getRandomNumber(-window.innerWidth / 2, window.innerWidth / 2 - 60) +
          "px"
      );

      bubble.style.setProperty(
        "--yB",
        (getRandomNumber(-window.innerHeight, 0)) + "px"
      );
    }
  }, []);

  function getRandomNumber(low, high) {
    var r = Math.floor(Math.random() * (high - low + 1)) + low;
    return r;
  }

  return (
    <div className="aboutSection">
    <div className="aboutPage section" id="aboutMe">
      <h1 className="heading">About me</h1>
      <div className="scoreBoard">
      <h1>Score - {score}</h1>
      </div>
      <div className="aboutContainer">
        <div className="aboutTools" id="bubbleContainer">
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
    <div className="aboutText">
        <p>
          I am a Full Stack Developer with a passion for building beautiful and
          user- friendly websites. I have a strong understanding of both
          front-end and back- end development, and I am excited to put my skills
          to use in a professional setting. I am a quick learner and a team
          player, and I am confident that I can be a valuable asset to any web
          development team.
        </p>
      </div>    
    </div>
  );
};

export default About;

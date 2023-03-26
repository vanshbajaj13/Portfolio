import React, { useEffect } from "react";
import Bubbles from "./Bubbles";

const About = () => {

    useEffect(() => {
        // alert("on load started");
        const bubbles = document.getElementsByClassName("bubble");
        for (let i = 0; i < bubbles.length; i++) {
          const bubble = bubbles[i];
          bubble.addEventListener("mouseenter", () => {
            setTimeout(()=>{
                bubble.style.zIndex = -13;
            },500)
            setTimeout(() => {
                bubble.style.zIndex = 1;
            }, 2000);
        });
          bubble.addEventListener("animationend", () => {
            alert("animationed event bined");
            changePosition(bubble);
          });
        }
    
        function changePosition(bubble) {
            alert("changePosition funtion runnnig");
    
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
            getRandomNumber(-window.innerHeight + 60, 0) + "px"
          );
        }
    }, [])
    
//   window.onload = () => {
//     alert("on load started");
//     const bubbles = document.getElementsByClassName("bubble");
//     for (let i = 0; i < bubbles.length; i++) {
//       const bubble = bubbles[i];
//       bubble.addEventListener("mouseenter", () => {
//         setTimeout(()=>{
//             bubble.style.zIndex = -13;
//         },500)
//         setTimeout(() => {
//             bubble.style.zIndex = 1;
//         }, 2000);
//     });
//       bubble.addEventListener("animationend", () => {
//         alert("animationed event bined");
//         changePosition(bubble);
//       });
//     }

//     function changePosition(bubble) {
//         alert("changePosition funtion runnnig");

//       bubble.style.animationName = "none";

//       requestAnimationFrame(() => {
//         bubble.style.animationName = "";
//       });
//       const bubbleStyle = getComputedStyle(bubble);

//       var curX = bubbleStyle.getPropertyValue("--xB");
//       var curY = bubbleStyle.getPropertyValue("--yB");

//       bubble.style.setProperty("--xA", curX);
//       bubble.style.setProperty("--yA", curY);

//       bubble.style.setProperty(
//         "--xB",
//         getRandomNumber(-window.innerWidth / 2, window.innerWidth / 2 - 60) +
//           "px"
//       );

//       bubble.style.setProperty(
//         "--yB",
//         getRandomNumber(-window.innerHeight + 60, 0) + "px"
//       );
//     }
//   };

  function getRandomNumber(low, high) {
    var r = Math.floor(Math.random() * (high - low + 1)) + low;
    // alert("r value return = " + r);
    return r;
  }

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

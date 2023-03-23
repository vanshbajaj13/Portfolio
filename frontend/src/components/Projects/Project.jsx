import React, { useLayoutEffect } from "react";
import picture from "../../asset/Images/peakParcel.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = (props) => {
  gsap.registerPlugin(ScrollTrigger);
  
  const idText = "projectText" + props.id;
  const idImage = "projectImage" + props.id;
  const idTextSelector = "#" + idText;
  const idImageSelector = "#" + idImage;


  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        idTextSelector,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: idTextSelector,
            // markers: true,
            start: "-50% center",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        idImageSelector,
        {
          x: 200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          ease:"circ",
          scrollTrigger: {
            trigger: idImageSelector,
            // markers: true,
            start: "-50% center",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="projectContainer project" >
      <div className="projectAbout" id={idText}>
        <h1 className="green">{props.title}</h1>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="btn live green">Live</button>
          <button className="btn github ">Github</button>
        </div>
      </div>
      <div className="projectImage" id={idImage}>
        <img src={picture} alt="project " />
      </div>
    </div>
  );
};

export default Project;

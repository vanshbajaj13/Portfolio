import React, { useLayoutEffect } from "react";
import { projects } from "../../data";
import Project from "./Project";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ProjectPage = (props) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".projectAbout").forEach((pj) => {
        gsap.fromTo(
          pj,
          {
            x: -200,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            scrollTrigger: {
              trigger: pj,
              // markers: true,
              start: "-50% center",
              end: "center center",
              scrub: true,
              anticipatePin:true,
              onLeave: () => ScrollTrigger.clearScrollMemory(),
            },
          }
        );
      });
      gsap.utils.toArray(".projectImage").forEach((pjImg) => {
        gsap.fromTo(
          pjImg,
          {
            x: 200,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            // ease: "circ",
            scrollTrigger: {
              trigger: pjImg,
              // markers: true,
              start: "-50% center",
              end: "center center",
              scrub: 1,
              anticipatePin:true,
              onLeave: () => ScrollTrigger.clearScrollMemory(),
            },
          }
        );
      });
    });
    return () => ctx.revert();
    // eslint-disable-next-line
  }, []);
  return (
    <div id="projectPage" className="section panel">
      <h1 className="heading">My Projects</h1>
      {projects.map((project) => {
        return (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.Image}
            website={project.website}
            github={project.github}
            account={project.account}
            password={project.password}
          />
        );
      })}
    </div>
  );
};

export default ProjectPage;

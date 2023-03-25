import React from "react";

const Project = (props) => {
  let img = props.image;
  console.log(img);
  return (
    <div className="projectContainer project">
      <div className="projectAbout">
        <h1 className="green">{props.title}</h1>
        <p>{props.description}</p>
        <div className="buttons">
          <a href={props.website} target="_blank" rel="noreferrer">
            <button className="btn live green">
              
              Live
            </button>
          </a>
          <a href={props.github} target="_blank" rel="noreferrer">
            <button className="btn github ">
            Github</button>
          </a>
        </div>
      </div>
      <div className="projectImage">
        <img  src={`Images/${props.image}`} alt="project " />
      </div>
    </div>
  );
};

export default Project;

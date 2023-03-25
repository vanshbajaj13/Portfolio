import React from "react";
import picture from "../../asset/Images/peakParcel.png";

const Project = (props) => {

  return (
    <div className="projectContainer project" >
      <div className="projectAbout" >
        <h1 className="green">{props.title}</h1>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="btn live green">
          <a href={props.website} target="_blank">
            Live
          </a>
          </button>
          <button className="btn github ">
          <a href={props.github} target="_blank">
          Github
          </a>
          </button>
        </div>
      </div>
      <div className="projectImage">
        <img src={picture} alt="project " />
      </div>
    </div>
  );
};

export default Project;

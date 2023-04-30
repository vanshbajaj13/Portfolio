import React from "react";

const Project = (props) => {
  return (
    <div className="projectContainer project">
      <div className="projectAbout">
        <h1 className="green">{props.title}</h1>
        <p>{props.description}</p>
        {props.account && <>
        <p>Account - <span>{props.account}</span></p>
        <p>Password - <span>{props.password}</span></p>
        </>}
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
      {/* <iframe src={props.website} title={props.title}></iframe> */}
        <img  src={`Images/${props.image}`} alt="project " />
      </div>
    </div>
  );
};

export default Project;

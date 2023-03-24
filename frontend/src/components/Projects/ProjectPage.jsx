import React from 'react'
import { projects } from "../../data";
import Project from "./Project";


const ProjectPage = (props) => {
    return(
        <div  id='projectPage'>
        <h1 className='heading'>My Project</h1>
        {projects.map((project) => {
            return (
              <Project
              key={project.id}
              id = {project.id}
                title={project.title}
                description={project.description}
                image={project.Image}
              />
            );
          })
        }
        </div>
    );
};

export default ProjectPage;

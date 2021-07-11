import React from 'react';
import './style.css';

const ProjectList = (props) => {
  return (
    <div>
      {props.projects.map((project, index) => {
       return (
        <span className='image-wrap' key={`${project.img}-${index}`}><img src={project.img} alt="" /></span>
      )
      })}
    </div>
  )
}

export default ProjectList;

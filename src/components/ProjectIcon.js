import React from "react";

const ProjectIcon = ({ projectName, onClick, folder }) => {
  return (
    <div>
      <img
        src={require(`../media/projectimgs/${folder}/projectIcon.JPG`)}
        className='icon project'
        onClick={onClick}/>
        
      <p>{projectName}</p>
    </div>
  );
};

export default ProjectIcon;

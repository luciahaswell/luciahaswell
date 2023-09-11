import React, { useState } from "react";
import ProjectIcon from "./ProjectIcon";
import ProjectPage from "./ProjectPage";
import projectList from "../data/projectData";


const Projects = () => {
    const [showPopUp, setShowPopUp] = useState(false);
    const [projectClicked, setProjectClicked] = useState(null);

    const openWindowHandler = (projectName) => {
        setProjectClicked(projectName);
        setShowPopUp(true);
    };

    let openProjectIndex = projectList.findIndex((p) => p.projectName === projectClicked);

    return (
        <div className="section" id='projectsSection'>
            <h2 className="sectionHeader">PROJECTS</h2>
            <div className="projectIconContainer">
                {projectList.map((project, index) => (
                    <ProjectIcon
                        key={index}
                        projectName={project.projectName}
                        onClick={() => openWindowHandler(project.projectName)}
                        iconColor={project.iconColor}
                        folder = {project.foldername}
                    />
                ))}
            </div>
            {showPopUp && <ProjectPage
                page={projectClicked}
                setShowPopUp={setShowPopUp}
                projectName={projectList[openProjectIndex].projectName}
                techsUsed={projectList[openProjectIndex].techsUsed}
                projectDescription={projectList[openProjectIndex].projectDescription}
                projectScreenshots={projectList[openProjectIndex].projectScreenshots}
                gitHubLink={projectList[openProjectIndex].gitHubLink}
            />
            }
        </div>
    )
}

export default Projects;
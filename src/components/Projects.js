import React, { useState } from "react";
import ProjectIcon from "./ProjectIcon";
import ProjectPage from "./ProjectPage";

const projectList = [
    {
        projectName: "Jammming",
        foldername: 'jammming',
        techsUsed: "React, HTML, CSS",
        projectDescription: "Created with the guidance of Codecademy's Front-End Engineer Career Path. This React project lets user browse songs through the Spotify API and add those to a playlist. Once all the songs are added to the playlist, the user can save the playlist to their own Spotify profile.",
        projectScreenshots: [require("../media/projectimgs/jammming/step1.JPG"),
            require("../media/projectimgs/jammming/step2.JPG"),
            require("../media/projectimgs/jammming/step3.JPG"),
            require("../media/projectimgs/jammming/step4.jpg")],
        gitHubLink: "https://github.com/luciahaswell/jammming"
    },
    {
        projectName: "Tic-Tac-Toe",
        techsUsed: "React, HTML, CSS",
        foldername: 'tictactoe',
        projectDescription: "Basic React app that lets users play the classic game of tic-tac-toe. Includes a dark mode feature to switch display.",
        projectScreenshots: [require("../media/projectimgs/tictactoe/step1.JPG"),
            require("../media/projectimgs/tictactoe/step2.JPG"),
            require("../media/projectimgs/tictactoe/step3.JPG"),
            require("../media/projectimgs/tictactoe/step4.JPG")],
        gitHubLink: "https://luciahaswell.github.io/tictactoe/"
    },
    {
        projectName: "Portfolio Website",
        techsUsed: "React, HTML, CSS,Figma",
        foldername: 'luciahaswell',
        projectDescription: "Personal portfolio website for myself. Used Figma to build and outline the design before building in React",
        projectScreenshots: [require("../media/projectimgs/luciahaswell/figma.JPG")],
        gitHubLink: "https://github.com/luciahaswell/luciahaswell"
    }
]

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
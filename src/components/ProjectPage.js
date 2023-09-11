import React from 'react';

const ProjectPage = ({ setShowPopUp, projectName, techsUsed, projectDescription, projectScreenshots, gitHubLink }) => {

    const handleClose = () => {
        setShowPopUp(false);
    }

    return (
        <div className="projectPage">
            <button className='closeButton' onClick={handleClose}>X</button>
            <h2 className='projectName'>{projectName}</h2>
            <h4 className='techUsed'>{'Created with ' + techsUsed}</h4>
            <p className='projectDescription'>{projectDescription}</p>
            <a href={gitHubLink} target='_blank'>Link to Project</a>
            <h3>Screenshots:</h3>
            <div className='projectScreenshots'>
                {projectScreenshots.map(link =>
                    <img className="imgScreenshot" src={link} />
                )}
            </div>
        </div>
    )
}


export default ProjectPage;


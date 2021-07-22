import React from 'react';

import './Projects.css';

const projectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    videoUrl,
    projectUrl

}) => {
    return (
        <div className="project-Card">
            <div className="image-container">
                <a href={projectUrl} className="project-external-link">
                    <img src={imageUrl} alt="project" className="project-image" />
                </a>
            </div>

            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a href={videoUrl} className="project-yt-link">Watch More!</a>

            </div>
        </div>
    );
}
export default projectCard;

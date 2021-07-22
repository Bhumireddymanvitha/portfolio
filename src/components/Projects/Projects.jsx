import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';



const projects = () => {
    return (
        <div className='section-container'>
            <Header
                heading="My Projects."
                details="Here are a few cool things I've worked on, do check them out!" />

            <div className="project-cards-container">
                {projectsData.map(({
                    projectName,
                    projectDescription,
                    imageUrl,
                    videoUrl,
                    projectUrl
                }) => {
                    return <ProjectCard
                        projectName={projectName}
                        projectDescription={projectDescription}

                        imageUrl={imageUrl}
                        videoUrl={videoUrl}
                        projectUrl={projectUrl} />
                })

                }
            </div>

            <FooterLink phrase="Check out " link="my WorkExperience!" toAdress="/work experience" />



        </div>
    );
};
export default projects;
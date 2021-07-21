import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Skills.css';
import skillsVector from './../../assets/skills_vector.png';
import { skillList } from './../../assets/skillsData';
import SkillCard from './SkillCard';
const Skills = () => {
    return (
        <div className='section-container'>
            <Header
                heading="My Skills."
                details="Passionate about new technologies,I keep exploring new stuff . Here's the tech stack I've worked with! " />

            <div className="skill-card-container">
                {skillList.map(({ skillName, skillUrl }) => (


                    <SkillCard skillName={skillName} skillUrl={skillUrl} />


                ))
                }
            </div>





            <FooterLink phrase="Check out " link="Certifications!" toAdress="/Licenses and Certifications" />
            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    );
};
export default Skills;
import React from 'react';
import './WorkExperience.css';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import ContactVector from './../../assets/contact_anime.png';
const WorkExperience = () => {
    return (
        <div className='section-container'>
            <Header
                heading="My Experience."

                details="I have experience in building Machine learning,Web,Python,Nodejs,React and Javascript projects!" />
            <ul>
                <h3>Internship</h3>
                <h3>The Sparks Foundation</h3>
                <h3>Data Science and Business Analytics Inter</h3>
                <h3>Web & Mobile Development Tasks</h3>


                <li>Worked as Data Science and Business Analytics intern on tasks basedon EDA and Machine Learning.</li>
            </ul>

            <FooterLink phrase="Check out " link="My Skills!" toAdress="/skills" />

            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>


        </div>
    );
};
export default WorkExperience;
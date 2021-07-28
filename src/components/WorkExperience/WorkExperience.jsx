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
                <h2>Internship</h2>
                <h3>Organisation: The Sparks Foundation</h3>
                <li>
                    <h3>Data Science and Business Analytics Intern</h3>
                </li>
                <li>
                    <h3>Web Development & Designing Intern</h3>
                </li>
            </ul>





            <FooterLink phrase="Check out " link="My Skills!" toAdress="/skills" />

            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>


        </div>
    );
};
export default WorkExperience;

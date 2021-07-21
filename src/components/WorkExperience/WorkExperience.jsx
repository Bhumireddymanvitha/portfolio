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

            <FooterLink phrase="Check out " link="My Skills!" toAdress="/skills" />

            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>


        </div>
    );
};
export default WorkExperience;
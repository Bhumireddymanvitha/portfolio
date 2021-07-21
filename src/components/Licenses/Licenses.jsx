import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Licenses.css';
import ContactVector from './../../assets/contact_anime.png';
const Licenses = () => {
    return (
        <div className='section-container'>
            <Header
                heading="My Licenses and Certifications"
            />

            <FooterLink phrase="Get in" link="touch." toAdress="/Contact" />
            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>

        </div>
    );
};
export default Licenses;
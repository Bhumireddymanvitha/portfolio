import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import aboutAnime from './../../assets/about_anime.gif';
import './About.css';
const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me..'
                details=' Full Stack Developer | competitive programmer | I m a young ,dynamic B.Tech Final Year student with the potential to solve Problems using the information gained during my studies. Strong passion towards learning new skills and gaining new skillsets and working on them.'
            />
            <div className="about-main">
                <div className="about-main-left">
                    {/*sub section 1*/}
                    <h3 className="about-sub-head">Student</h3>
                    <p className="about-details">

                        Karunya Institute of Technology and Sciences B.Tech. in Computer Engineering.


                        <a className='about-link-element'
                            href='https://www.karunya.edu/'> Visit Website</a>
                    </p>

                    <h3 className="about-sub-head">Web Developer</h3>
                    <p className="about-details">

                        Built  Projects on Full Stack Web Apps
                        Building resposive website front end using React, Bootstrap, JavaScript
                        Implementing end to end Full stack web applications.Creating backend using NodeJS,ExpressJS and database technologies like MongoDB and SQl.


                        <a className='about-link-element'>
                        </a>
                    </p>

                    <h3 className="about-sub-head">Volunteer</h3>
                    <p className="about-details">

                        Active Volunteer of NSS
                        Nature Club member


                        <a className='about-link-element'
                            href='https://www.karunya.edu/'> Visit Website</a>
                    </p>

                </div>
                <div className="about-main-right">
                    <img
                        src={aboutAnime}
                        alt='animation'
                        toAdress='about-anime'
                    />



                </div>
            </div>


















            <FooterLink
                phrase="Check out my "
                link="projects!"
                toAdress="/projects" />
            {/* Vector Frame! */}
            <div className="vector-frame">
                <img src={aboutVector} className='about-vector' alt='about' />

            </div>


        </div>
    );
};
export default About;
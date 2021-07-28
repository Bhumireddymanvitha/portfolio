
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
            <body>
                <div class="grid">
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://learnyst.s3.amazonaws.com/assets/schools/2410/resources/images/logo_lco_t17sd.png" />
                            <div className="card-content">
                                <h1 class="card-header">Full Stack MERN Bootcamp</h1>
                                <p class="card-text">-Learncodeonline</p>
                                <a href='https://courses.learncodeonline.in/learn/certificate/3865170-50332'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://media.glassdoor.com/sqll/2143300/the-sparks-foundation-squarelogo-1556515236044.png" />
                            <div className="card-content">
                                <h1 class="card-header">Data Science and Business Analytics Intern</h1>
                                <p class="card-text">-The Sparks Foundation</p>
                                <a href=''>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse3.mm.bing.net/th?id=OIP.pz6_aWjwwQo-0HCkbVficgHaD2&pid=Api&P=0&w=329&h=171" />
                            <div className="card-content">
                                <h1 class="card-header">Programming for Everybody(Getting Started with Python</h1>
                                <p class="card-text">-University Of MICHIGAN</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/CA4HCCC29NWC'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse4.mm.bing.net/th?id=OIP.pWVp5vOylZ3ZK7tFAMhvfQHaEK&pid=Api&P=0&w=286&h=162" />
                            <div className="card-content">
                                <h1 class="card-header">How Google does Machine Learning</h1>
                                <p class="card-text">-Google Cloud</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/3XDYV7HTCWF9'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse3.mm.bing.net/th?id=OIP.pz6_aWjwwQo-0HCkbVficgHaD2&pid=Api&P=0&w=329&h=171" />
                            <div className="card-content">
                                <h1 class="card-header">Using Python to access Web Data</h1>
                                <p class="card-text">-University of Michigan</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/46Y4NZJW2B72'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse3.mm.bing.net/th?id=OIP.pz6_aWjwwQo-0HCkbVficgHaD2&pid=Api&P=0&w=329&h=171" />
                            <div className="card-content">
                                <h1 class="card-header">Python Data Structures</h1>
                                <p class="card-text">-University of Michigan</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/FY4DC34EWQ9C'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse3.mm.bing.net/th?id=OIP.EUFD2GKPtjfv9JzDlZk0OQAAAA&pid=Api&P=0&w=265&h=148" />
                            <div className="card-content">
                                <h1 class="card-header">Front-End Web UI Frameworks and Tools:Bootstrap 4</h1>
                                <p class="card-text">-The Hong Kong University of Science and Technology</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/E5RHYRHEADXN'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="card">
                            <img class="card-img" src="https://tse3.mm.bing.net/th?id=OIP.www7b7gXEHjpS-hixKe-YAHaEO&pid=Api&P=0&w=339&h=194" />
                            <div className="card-content">
                                <h1 class="card-header">Launching into Machine Learning</h1>
                                <p class="card-text">-Google Cloud</p>
                                <a href='https://www.coursera.org/account/accomplishments/verify/B748AA67LEHN'>
                                    <button class="card-btn">
                                        Visit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </body>


            <FooterLink phrase="Get in " link="touch." toAdress="/Contact" />
            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>

        </div>
    );
};
export default Licenses;
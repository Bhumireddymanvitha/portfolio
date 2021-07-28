import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import ContactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';
import instagram from './../../assets/in.png';
import medium from './../../assets/me.png';
import web from './../../assets/web.png';


const Contact = () => {
    return (
        <div className='section-container'>
            <Header heading="Get in touch."
                details="Interested to collaborate? Feel free to drop me an email." />

            {/* form section */}
            <div className="contact-form-container">
                <form
                    className="contact-form"
                    action='https://formspree.io/f/mgerlqvg'
                    method='POST'
                >
                    {/*email id input */}
                    <input
                        type="email"
                        placeholder="Your Email ID"
                        name="_replyto"
                        className="input-box email-input"
                        autoComplete='off'
                    />

                    {/* email body*/}
                    <textarea
                        type="text"
                        placeholder="Your Message"
                        name="message"
                        className="input-box body-input">


                    </textarea>
                    {/* submit button*/}
                    <button type="submit" className="contact-btn">
                        Send Email
                    </button>





                </form>
            </div>


            {/*social icons */}
            <div className="social-icons-container">
                <a href="https://github.com/Bhumireddymanvitha" className="social-icon">
                    <img src={github} alt="social" />


                </a>
                <a href="https://www.linkedin.com/in/manvitha999/" className="social-icon">
                    <img src={linkedin} alt="social" />


                </a>
                <a href="https://www.instagram.com/manvi_bhumi/" className="social-icon">
                    <img src={instagram} alt="social" />


                </a>
                <a href="https://medium.com/@bhumireddy18" className="social-icon">
                    <img src={medium} alt="social" />


                </a>

            </div>





            <FooterLink phrase="Read more " toAdress='/about' link='about me.' />

            <div className="vector-frame">
                <img src={ContactVector} alt="vector" className="about-vector" />
            </div>





        </div>
    );
};
export default Contact;
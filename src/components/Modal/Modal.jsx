import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>

            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">

                    <p onClick={closeModal} className="close">&times;</p>

                </div>
                <div className="middle-section">

                    <h1>Welcome to my Portfolio!</h1>





                </div>
                <div className="lower-section">
                    <a onClick={closeModal} className="modal-btn btn-red">Close</a>
                    <a href="https://www.linkedin.com/in/manvitha999/" target="_blank" rel="noreferrer"
                        className='modal-btn btn-green'>
                        Linkedin
                    </a>


                </div>

            </div>
        </div>,
        document.getElementById('modal')

    );
};
export default Modal;
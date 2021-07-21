import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ closeModal }) => {
    return ReactDOM.createPortal(
        <div onClick={closeModal} className='modal-overlay'>

            <div onClick={(e) => e.stopPropagation()} className="modal-container">
                <div className="upper-section">
                    <h1>Huge Annoucement!</h1>
                    <p onClick={closeModal} className="close">&times;</p>

                </div>
                <div className="middle-section">
                    <h3>i want to write</h3>
                    <p>..</p>
                    <p>


                    </p>


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
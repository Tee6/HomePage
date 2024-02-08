import React from 'react';
import '../styles/contactbtn.css';

const ContactMe: React.FC = () => {
    return (
        <div
            style={{
                position: 'fixed',
                top: '20px',
                right: '10px',
                width: '10%',
            }}>
            <button className='contact-me-btn'>
                Contact Me
            </button>
        </div>
    );
};

export default ContactMe;

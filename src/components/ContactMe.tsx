import React from 'react';

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

import React from 'react';
import '../styles/contactbtn.css';

const ContactMe: React.FC = () => {
    const email = 'n.leimegger@gmail.com';
    const subject = 'Hallo Niko!';
    const body = 'Hallo Niko! Ich habe deine Webseite gesehen und möchte gerne mit dir in Kontakt treten.';

    const handleClick = () => {
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className='cnt-div'>
            <button className='contact-me-btn' onClick={handleClick}>
                Contact Me
            </button>
        </div>
    );
};

export default ContactMe;

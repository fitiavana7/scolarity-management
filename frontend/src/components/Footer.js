import React from 'react';

const Footer = (props) => {
    return (
        <div className='footer'>
            <div className="footer-link">
                <a href="http://www.facebook.com" target="_blank" rel='noopener noreferer'><i className="fa fa-facebook"></i></a>
                <a href="http://www.instagram.com" target="_blank" rel='noopener noreferer'><i className="fa fa-instagram"></i></a>
                <a href="http://www.gmail.com" target="_blank" rel='noopener noreferer'><i className="fa fa-envelope"></i></a>
                <a href="http://www.linkedin.com" target="_blank" rel='noopener noreferer'><i className="fa fa-linkedin"></i></a>
            </div>
            <div className="footer-droit">
                <p>Fitiavana Andriaherilanto - copyright fevrier 2023 &copy;</p>
            </div>
        </div>
    );
};

export default Footer;
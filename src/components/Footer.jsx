import React from 'react';

import myLogo from '../assets/img/my_logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__dev">
                    <span>Разработка приложения:</span>
                    <a href="https://github.com/Dmitriev-Nikolay" target="_blank" rel="noreferrer">
                        <img width="40" height="40" src= {myLogo } alt="My logo" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
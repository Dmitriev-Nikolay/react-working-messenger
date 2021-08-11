import React from 'react';

import messengerLogo from '../assets/svg/messenger-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">React Messenger</h1>
                <div className="header__logo">
                    <img src={ messengerLogo } alt="Messenger logo" width="70" height="70" />
                </div>
            </div>
        </header>
    );
};

export default Header;
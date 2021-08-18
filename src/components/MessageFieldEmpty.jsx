import React from "react";

import arrowLeft from '../assets/img/left.png';

const MessageFieldEmpty = () => {
    return (
        <section className="empty-message-field">
            <img src={ arrowLeft } alt="Arrow left" width="150" height="150" />
            <span className="empty-message-field__text">Выбери чат для общения</span>
        </section>
    );
};

export default MessageFieldEmpty;
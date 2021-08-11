import React from 'react';

import trash from '../assets/img/trash.png';
import edit from '../assets/img/edit.png';

const Message = React.memo((props) => {
    const { key, id, name, text, date } = props;

    const [isActiveMessage, setIsActiveMessage] = React.useState(false);
    const messageRef = React.useRef(null);

    const clickOnMessage = () => {
        setIsActiveMessage(!isActiveMessage);
    };

    const clickedOut = (event) => {
        const target = event.target;
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(target); // для всех браузеров
        if (!path.includes(messageRef.current)) {
            setIsActiveMessage(false);
        };
    };

    React.useEffect(() => {
        document.addEventListener('click', clickedOut);
        return () => document.removeEventListener('click', clickedOut);
    }, []);

    return (
        <div className="message-block">
            <section className={ id === 1 ? 'message-block__me' : 'message-block__not-me' } onClick={ clickOnMessage } ref={ messageRef }>
                <div className="message">
                    <p className="message__name"><b>{ name }</b></p>
                    <p className="message__text">{ text }</p>
                    <time className="message__date">{ date }</time>
                </div>
                {
                    isActiveMessage &&
                    <section className="change">
                        <img src={ trash } alt="trash" width="25" height="25" />
                        <img src={ edit } alt="edit" width="25" height="25" />
                    </section>
                }
            </section>
        </div>
    );
});

export default Message;
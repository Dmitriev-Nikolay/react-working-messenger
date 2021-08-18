import React from 'react';

import trash from '../assets/img/trash.png';
import edit from '../assets/img/edit.png';
import checkEdit from '../assets/img/check-mark-edit.png';

const Message = React.memo((props) => {
    const { idMessage, idUser, name, text, date, clickEdit, clickDelete } = props;

    const [isActiveMessage, setIsActiveMessage] = React.useState(false);
    const [isActiveEditMessageField, setActiveEditMessageField] = React.useState(false);
    const [valueInput, setValueInput] = React.useState(text);

    const messageRef = React.useRef(null);  

    const clickOnMessage = () => {
        setIsActiveMessage(!isActiveMessage);
    };

    const clickOnEditMessage = () => {
        setActiveEditMessageField(!isActiveEditMessageField);
    };

    const deleteCurrentMessage = () => {
        clickDelete(idMessage);
    };

    const onAcceptСhangeEdit = () => {
        const msg = {
            idMessage,
            valueInput
        };
        if (valueInput === text) {
            setActiveEditMessageField(false);
            return;
        }
        else if (!valueInput) {
            deleteCurrentMessage(idMessage);
        } else {
            clickEdit(msg);
            setActiveEditMessageField(false);
        };
    };

    const clickedOut = (event) => {
        const target = event.target;
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(target); // для всех браузеров
        if (!path.includes(messageRef.current)) {
            setIsActiveMessage(false);
            setActiveEditMessageField(false);
        };
    };

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };

    React.useEffect(() => {
        document.addEventListener('click', clickedOut);
        return () => document.removeEventListener('click', clickedOut);
    }, []);

    return (
        <div className="message-block">
            <section className={ idUser === 1 ? 'message-block__me' : 'message-block__not-me' } onClick={ clickOnMessage } ref={ messageRef }>
                <div className="message">
                    <p className="message__name"><b>{ name }</b></p>
                    {
                        isActiveEditMessageField ?
                            <section className="message__edit">
                                <textarea type="text" value={ valueInput } onChange={ (e) => handleChange(e)} />
                                <img src={ checkEdit } alt="check edit" width="25" height="25" onClick={ onAcceptСhangeEdit } />
                            </section>
                            :
                            <p className="message__text">{ valueInput }</p>
                    }
                    <time className="message__date">{ date }</time>
                </div>
                {
                    (isActiveMessage && !isActiveEditMessageField) &&
                    <section className="change">
                        <img src={ trash } alt="trash" width="25" height="25" onClick={ deleteCurrentMessage } />
                        <img src={ edit } alt="edit" width="25" height="25" onClick={ clickOnEditMessage }/>
                    </section>
                }
            </section>
        </div>
    );
});

export default Message;
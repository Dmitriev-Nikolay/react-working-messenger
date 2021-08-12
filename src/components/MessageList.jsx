import React from 'react';

import uuid from 'react-uuid';

import { useDispatch } from 'react-redux';
import { removeCurrentMessage, editCurrentMessage } from '../store/actions/messages';

import { Message } from '../components';

const MessageList = React.memo(({ messages, scrollToBottom }) => {
    const dispatch = useDispatch(); // mapActions    

    const editCurrentMsg = React.useCallback((msgObj) => {
        dispatch(editCurrentMessage(msgObj));
    }, [dispatch]);

    const deleteCurrentMsg = React.useCallback((indexMsg) => {
        dispatch(removeCurrentMessage(indexMsg));
    }, [dispatch]);

    const messagesList = messages.map((message) => {
        return (
            <Message
                key={ uuid() }
                idMessage={ message.idMessage }
                idUser={ message.userId }
                name={ message.userName }
                text={ message.textMessage }
                date={ message.dateMsg }
                clickEdit={ editCurrentMsg }
                clickDelete={ deleteCurrentMsg }
            />
        )
    })

    return (
        <section className="messages-field__list" ref={ scrollToBottom }>
            { messagesList }
        </section>
    );
});

export default MessageList;
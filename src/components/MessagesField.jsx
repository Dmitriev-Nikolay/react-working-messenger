import React from 'react';

import { MessageList, MessageInput, Loader } from '../components';
import { useSelector, useDispatch } from 'react-redux';

import { sendMessage } from '../store/actions/messages';

const MessagesField = React.memo(({ scroll, scrollToBottom }) => {
    const [currentDate, setCurrentDate] = React.useState(new Date().toLocaleTimeString()); // получаем текущую дату
    const [inputValue, setInputValue] = React.useState('');

    const { isLoaded, messages } = useSelector(state => { // mapState
        return {
            isLoaded: state.messagesReducer.isLoaded,
            messages: state.messagesReducer.messages,
        };
    });

    const dispatch = useDispatch(); // mapActions    

    const sendMessages = React.useCallback((message) => {
        if (!message) {
        } else {
            dispatch(sendMessage(1, 'Николай', inputValue));
            setInputValue('');
            let timerScroll = setTimeout(() => {
                scrollToBottom();
            }, 0);
            return () => clearTimeout(timerScroll);
        };
    }, [dispatch, inputValue, scrollToBottom]);

    const handleClick = (message) => {
        sendMessages(message);
    };

    const handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            sendMessages(message);
        };
    };

    const handleChange = (event) => {
        if (event.keyCode !== 13) {
            setInputValue(event.target.value);
        } else {
            sendMessages();
        }
    };

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCurrentDate(new Date().toLocaleTimeString()); // обновляем дату каждую секунду 
        }, 1000);
        return () => clearInterval(timer);
    });

    return (
        <section className="messages-field">
            <section className="messages-field__desc">
                <h2 className="messages-field__name-chat">Общение</h2>
                <time className="messages-field__date">{ currentDate }</time>
            </section>
            <section className="messages-field__messages">
                {
                    isLoaded ?
                        <MessageList
                            messages={ messages }
                            scrollToBottom={ scroll }
                        />
                        : <Loader />
                }
            </section>
            <MessageInput
                value={ inputValue }
                click={ () => handleClick(inputValue) }
                change={ handleChange }
                keyup={ (e) => handleKeyUp(e, inputValue) }
            />
        </section>
    );
});

export default MessagesField;

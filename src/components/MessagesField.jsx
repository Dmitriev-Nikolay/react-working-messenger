import React from 'react';

import uuid from 'react-uuid';
import { Picker } from 'emoji-mart';

import { useSelector, useDispatch } from 'react-redux';
import { sendMessage } from '../store/actions/messages';

import { MessageList, MessageInput, Button, Loader, CurrentDate } from '../components';

import smile from '../assets/img/smile.png';

const MessagesField = React.memo(({ scroll, scrollToBottom, chatName, chatId }) => {
    const [inputValue, setInputValue] = React.useState('');
    const [isActiveSmillesMenu, setIsActiveSmillesMenui] = React.useState(false);
    const pickerRef = React.useRef(null);  

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
            dispatch(sendMessage(uuid(), 1, 'Николай', message));
            setInputValue('');
            let timerScroll = setTimeout(() => {
                scrollToBottom();
            }, 0);
            return () => clearTimeout(timerScroll);
        };
    }, [dispatch, scrollToBottom]);

    const handleClick = (message) => {
        sendMessages(message.trim());
    };

    const handleKeyUp = (event, message) => {
        if (event.keyCode === 13) {
            sendMessages(message.trim());
        };
    };

    const handleChange = (event) => {
        if (event.keyCode !== 13) {
            setInputValue(event.target.value);
        } else {
            sendMessages();
        }
    };

    const handleEmojiSelect = (e) => {
        setInputValue((text) => (text += e.native))
    };

    const pickerOut = (event) => {
        const target = event.target;
        const path = event.path || (event.composedPath && event.composedPath()) || event.composedPath(target); // для всех браузеров
        if (!path.includes(pickerRef.current)) {
            setIsActiveSmillesMenui(false);
        };
    };

    React.useEffect(() => {
        document.addEventListener('click', pickerOut);
        return () => {
            document.removeEventListener('click', pickerOut);
        };
    }, []);

    return (
        <section className="messages-field">
            <section className="messages-field__desc">
                <h2 className="messages-field__name-chat">{ chatName }</h2>
                <CurrentDate />
            </section>
            <section className="messages-field__messages">
                {
                    isLoaded ?
                        (
                            messages.length === 0 ?
                                <>
                                    <div className="messages-field__empty">Тебе выпала честь начать чат 😜</div>
                                    <section className="messages-field__send-block">
                                        <MessageInput
                                            value={ inputValue }
                                            click={ () => handleClick(inputValue) }
                                            change={ handleChange }
                                            keyup={ (e) => handleKeyUp(e, inputValue) }
                                        />
                                        <section className="messages-field__smiles-menu"  ref={ pickerRef }>
                                            <img src={ smile } onClick= { () => setIsActiveSmillesMenui(!isActiveSmillesMenu) } alt="Smile menu" width="45" height="45" />
                                            {
                                                isActiveSmillesMenu &&
                                                <Picker onSelect={ handleEmojiSelect } perLine={ 6 } style={ { position: 'absolute', zIndex: '10', bottom: '77px', right: '20px' } } />
                                            }
                                        </section>
                                        <Button clickSend={ () => handleClick(inputValue) } value={ inputValue }/>
                                    </section>
                                </>
                                : <>
                                    <MessageList
                                        messages={ messages }
                                        scrollToBottom={ scroll }
                                    />
                                    <section className="messages-field__send-block">
                                        <MessageInput
                                            value={ inputValue }
                                            click={ () => handleClick(inputValue) }
                                            change={ handleChange }
                                            keyup={ (e) => handleKeyUp(e, inputValue) }
                                        />
                                        <section className="messages-field__smiles-menu"  ref={ pickerRef }>
                                            <img src={ smile } onClick= { () => setIsActiveSmillesMenui(!isActiveSmillesMenu) } alt="Smile menu" width="45" height="45" />
                                            {
                                                isActiveSmillesMenu &&
                                                <Picker onSelect={ handleEmojiSelect } perLine={ 6 } style={ { position: 'absolute', zIndex: '10', bottom: '77px', right: '20px' } } />
                                            }
                                        </section>
                                        <Button clickSend={ () => handleClick(inputValue) } value={ inputValue }/>
                                    </section>
                                </>
                        )
                        : <Loader />
                }
            </section>
        </section >
    );
});

export default MessagesField;

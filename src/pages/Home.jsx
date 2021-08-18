import React from 'react';

import uuid from 'react-uuid';

import { useDispatch } from 'react-redux';
import { setMessages } from '../store/actions/messages';

import { Chats, MessagesField, MessageFieldEmpty } from '../components';

const options = { hour: 'numeric', minute: 'numeric' };

const mockMessages = [
    {
        idMessage: uuid(),
        userId: 2,
        userName: 'Артем',
        textMessage: 'Здорово, Колян!',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        idMessage: uuid(),
        userId: 3,
        userName: 'Анна',
        textMessage: 'Привет, Коль',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        idMessage: uuid(),
        userId: 4,
        userName: 'Игорек',
        textMessage: 'Оло',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        idMessage: uuid(),
        userId: 5,
        userName: 'Наташ',
        textMessage: 'Вжух...',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
];

const Home = React.memo(({ chatId, chatName }) => {
    const dispatch = useDispatch(); // mapActions
    const messageListContainer = React.useRef(null);

    const scrollToMyRef = () => {
        const scroll = messageListContainer.current.scrollHeight - messageListContainer.current.clientHeight;
        messageListContainer.current.scrollTo(0, scroll);
    };

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(setMessages(mockMessages)); // исскуственно сделаем задержку для отображения лоадера
            // scrollToMyRef(); // прокрутим вниз при загрузке всех сообщений
        }, 3000)
    }, [dispatch]);

    return (
        <div className="container">
            <Chats />
            { chatId ? <MessagesField 
                scroll={ messageListContainer } 
                scrollToBottom={ scrollToMyRef }
                chatName={ chatName }
                chatId={ chatId }
            /> : <MessageFieldEmpty /> }
        </div>
    );
});

export default Home;
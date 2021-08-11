import React from 'react';

import { useDispatch } from 'react-redux';

import { setMessages } from '../store/actions/messages';

import { Chats, MessagesField } from '../components';

const options = { hour: 'numeric', minute: 'numeric' };

const mockMessages = [
    {
        userId: 2,
        userName: 'Артем',
        textMessage: 'Здорово, Колян!',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        userId: 3,
        userName: 'Анна',
        textMessage: 'Привет, Коль',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        userId: 4,
        userName: 'Игорек',
        textMessage: 'Оло',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
    {
        userId: 5,
        userName: 'Наташ',
        textMessage: 'Вжух...',
        dateMsg: new Date().toLocaleTimeString('ru-RU', options),
    },
];

const Home = React.memo(() => {
    const dispatch = useDispatch(); // mapActions

    const messageListContainer = React.useRef(null);

    const scrollToMyRef = () => {
        const scroll = messageListContainer.current.scrollHeight - messageListContainer.current.clientHeight;
        messageListContainer.current.scrollTo(0, scroll);
    };

    React.useEffect(() => {
        setTimeout(() => {
            dispatch(setMessages(mockMessages)); // исскуственно сделаем задержку для отображения лоадера
            scrollToMyRef(); // прокрутим вниз при загрузке всех сообщений
        }, 3000)
    }, [dispatch]);

    return (
        <div className="container">
            <Chats />
            <MessagesField 
                scroll={ messageListContainer } 
                scrollToBottom={ scrollToMyRef }
            />
        </div>
    );
});

export default Home;
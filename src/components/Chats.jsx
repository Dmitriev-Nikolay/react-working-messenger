import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Chats = () => {
    const { chats } = useSelector(state => { // mapState
        return {
            chats: state.chatsReducer.chats,
        };
    });

    return (
        <section className="chats-block">
            <h2 className="chats-block__title">Чаты</h2>
            <section className="chats-block__available-chats">
                {
                    chats.map((chat, index) => {
                        return (
                            <Link to={ `/chat/${ chat.id }-${ chat.name }` } key={ chat.id }>
                                <div className="chats-block__chat">
                                    <h3 className="chats-block__chat-name">{ chat.name }</h3>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </section>
    );
};

export default Chats;
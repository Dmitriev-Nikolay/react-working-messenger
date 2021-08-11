import React from 'react';

import { Message } from '../components';

const MessageList = React.memo(({ messages, scrollToBottom }) => {
    return (
        <section className="messages-field__list" ref={ scrollToBottom }>
            {
                messages.map((message, index) => {
                    return (
                        <Message
                            key={ `${ message.userId }_${ index }` }
                            id={ message.userId }
                            name={ message.userName }
                            text={ message.textMessage }
                            date={ message.dateMsg }
                        />
                    )
                })
            }
        </section>
    );
});

export default MessageList;
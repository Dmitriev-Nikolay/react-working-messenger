import React from 'react';

const MessageInput = React.memo((props) => {
    const { value, click, change, keyup } = props;

    return (
        <section className="messages-field__input">
            <input 
                type="text"
                value={ value }
                onChange={ change }
                onKeyUp={ keyup }
                placeholder="написать сообщение..." 
            />
            <button
                type="button"
                onClick={ click }
            >
                Отправить сообщение
            </button>
        </section>
    );
});

export default MessageInput;
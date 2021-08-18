import React from 'react';

const MessageInput = React.memo((props) => {
    const { value, change, keyup } = props;

    // const [chosenEmoji, setChosenEmoji] = React.useState(null);
    // const [finalInputValue, setFinalInputValue] = React.useState(value);
    // const [isActiveSmillesMenu, setIsActiveSmillesMenui] = React.useState(false);

    // const [text, setText] = React.useState(value);


    // const handleEmojiSelect = (e) => {
    //     setText((text) => (text += e.native))
    // }

    return (
        <input
            className="messages-field__input"
            type="text"
            value={ value }
            onChange={ change }
            onKeyUp={ keyup }
            placeholder="написать сообщение..."
        />
    );
});

export default MessageInput;
import React from 'react';
// import Picker from 'emoji-picker-react';

// import smile from '../assets/img/smile.png';

const MessageInput = React.memo((props) => {
    const { value, click, change, keyup } = props;

    // const [chosenEmoji, setChosenEmoji] = React.useState(null);
    // const [isActiveSmillesMenu, setIsActiveSmillesMenui] = React.useState(false);

    // const onEmojiClick = (event, emojiObject) => {
    //     setChosenEmoji(emojiObject);
    //     setFinalInput(finalInput + emojiObject.emoji)
    //     console.log(emojiObject);
    // };

    return (
        <section className="messages-field__input">
            <input 
                type="text"
                value={ value }
                onChange={ change }
                onKeyUp={ keyup }
                placeholder="написать сообщение..." 
            />
            {/* <img className="smiles-menu" src={ smile } onClick= {() => setIsActiveSmillesMenui(!isActiveSmillesMenu) } alt="Smile menu" width="40" height="40" /> */}
            {/* {
                isActiveSmillesMenu &&
                <Picker onEmojiClick={ onEmojiClick } pickerStyle={ {  width : '50%', height: '200px', zIndex: '2', position: 'absolute', bottom: '80px', right: '20px'} }/>
            } */}
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
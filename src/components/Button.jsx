import React from 'react';

import classnames from 'classnames';

const Button = React.memo(({ clickSend, value }) => {
    return (
        <button
            className={ classnames({
                "messages-field__button-send": value,
                "messages-field__button-send disabled": !value,
            })
            }
            type="button"
            onClick={ clickSend }
        >
            Отправить <br />сообщение
        </button>
    );
});

export default Button;

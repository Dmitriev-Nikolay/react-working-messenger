import { LOAD_CHATS } from '../actions/constants';

const initialState = {
    chats: [
        { id: '1', name: 'Общение и флуд', messagesList: [1] },
        { id: '2', name: 'Рабочий', messagesList: [2] },
    ],
};

const chats = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_CHATS:
            return {
                ...state,
            };
            default:
            return state;
    };
};

export default chats;
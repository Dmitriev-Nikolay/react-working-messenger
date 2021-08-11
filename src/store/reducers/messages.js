import { SET_MESSAGES, SET_LOADED, SEND_MESSAGE, DELETE_MESSAGE } from '../actions/constants';

const initialState = {
    messages: [],
    isLoaded: false,
};

const messages = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
                isLoaded: true,
            };
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            };
        case SEND_MESSAGE:
            const copyMessages = [...state.messages];
            copyMessages.push(action.payload);
            return {
                ...state,
                messages: copyMessages,
            };
        // case DELETE_MESSAGE:
        //     const copyMessages = [...state.messages];
        //     copyItemsForDeleteGroup.push(action.payload);
        //     return {
        //         ...state,
        //         messages: copyItemsForDeleteGroup,
        //     };
        default:
            return state;
    };
};

export default messages;
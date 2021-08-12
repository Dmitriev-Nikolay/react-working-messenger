import { SET_MESSAGES, SET_LOADED, SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from '../actions/constants';

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
        case DELETE_MESSAGE:
            const copyMessagesForDelete = [...state.messages];
            const messagesAfterDelete = copyMessagesForDelete.filter((msg) => msg.idMessage !== action.payload);
            return {
                ...state,
                messages: messagesAfterDelete,
            };
        case EDIT_MESSAGE:
            const copyMessagesForEdit = [...state.messages];
            const messagesAfterEdit = copyMessagesForEdit.map((msg) => msg.idMessage !== action.payload.idMessage ? msg : { ...msg, textMessage: action.payload.valueInput });
            return {
                ...state,
                messages: messagesAfterEdit,
            };
        default:
            return state;
    };
};

export default messages;
import { SET_MESSAGES, SET_LOADED, SEND_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE } from './constants';

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const setLoaded = (status) => ({
    type: SET_LOADED,
    payload: status,
});

export const removeCurrentMessage = (id) => ({
    type: DELETE_MESSAGE,
    payload: id,
});

export const editCurrentMessage = (objForEdit) => ({
    type: EDIT_MESSAGE,
    payload: objForEdit,
});

const options = { hour: 'numeric', minute: 'numeric' };

export const sendMessage = (idMessage, userId, userName, textMessage) => ({
    type: SEND_MESSAGE,
    payload: { idMessage, userId, userName, textMessage, dateMsg: new Date().toLocaleString('ru-RU', options) },
});
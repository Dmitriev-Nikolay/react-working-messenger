import { SET_MESSAGES, SET_LOADED, SEND_MESSAGE, DELETE_MESSAGE } from './constants';

export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const setLoaded = (status) => ({
    type: SET_LOADED,
    payload: status,
});

export const removeCurrentMessage = (message) => ({
    type: DELETE_MESSAGE,
    payload: message,
});

const options = { hour: 'numeric', minute: 'numeric' };

export const sendMessage = (userId, userName, textMessage) => ({
    type: SEND_MESSAGE,
    payload: { userId, userName, textMessage, dateMsg: new Date().toLocaleString('ru-RU', options) },
});
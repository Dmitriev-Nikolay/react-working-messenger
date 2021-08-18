import { combineReducers } from "redux";
import messagesReducer from './messages';
import chatsReducer from './chats';

const rootReducer = combineReducers({ messagesReducer, chatsReducer });

export default rootReducer;
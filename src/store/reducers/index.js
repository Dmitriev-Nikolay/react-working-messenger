import { combineReducers } from "redux";
import messagesReducer from './messages';

const rootReducer = combineReducers({ messagesReducer });

export default rootReducer;
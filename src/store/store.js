import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

// const saveToLocalStorage = (state) => {
//     try {
//         localStorage.setItem('state', JSON.stringify(state));
//     } catch (err) {
//         console.error(err);
//     }
// };

// const loadFromLocalStorage = () => {
//     try {
//         const stateStr = localStorage.getItem('state');
//         return stateStr ? JSON.parse(stateStr) : undefined;
//     } catch (e) {
//         console.error(e);
//         return undefined;
//     }
// };
// const persistedStore = loadFromLocalStorage();

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => { };

const store = createStore(
    rootReducer,
    // persistedStore,
    composeEnhancers(applyMiddleware(), reduxDevTool),
    // composeEnhancers(applyMiddleware(thunk)),
);

// store.subscribe(() => {
//     saveToLocalStorage(store.getState());
// });

export default store;
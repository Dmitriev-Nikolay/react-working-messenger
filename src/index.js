import React from 'react';
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// import store from './store/store';

import './scss/app.scss';
import App from './App';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

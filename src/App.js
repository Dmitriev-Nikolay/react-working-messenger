import React from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';

import { Header, Footer } from './components';
import Router  from './store/router/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Router />
          </div>
          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;

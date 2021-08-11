import React from 'react';

import { Route } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={ Home } />
      </div>
      <Footer />
    </div>
  );
};

export default App;

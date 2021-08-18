import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../pages/';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/chat" component={ Home } />
            <Route exact path='/chat/:chatId-:chatName' render={({ match }) =>
                <Home chatId={ Number(match.params.chatId) } chatName={ match.params.chatName } />}
            />
        </Switch>
    );
};

export default Router;
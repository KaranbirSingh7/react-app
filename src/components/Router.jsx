import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import StorePicker from './StorePicker.jsx';
import App from './App.jsx';
import NotFound from './NotFound.jsx';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker} />
            <Route path="/store/:storeId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
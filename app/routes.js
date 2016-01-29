import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Counter from './counter/Counter';
import App from './App';

let routes = (
    <Route path="/app/index.html" component={App}>
        <IndexRoute component={Counter}></IndexRoute>
    </Route>
);

export default routes;
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Counter from './counter/Counter';
import Layout from './layout/Layout';

let routes = (
    <Route path="/app/index.html" component={Layout}>
        <IndexRoute component={Counter}></IndexRoute>
    </Route>
);

export default routes;
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Counter from './counter/Counter';
import Layout from './layout/Layout';
import Home from './home/Home';
import Page404 from './common/pages/404';

let routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Counter} />
        <Route path="home" component={Home}/>

        <Route path="*" component={Page404} />
    </Route>
);

export default routes;
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/Layout';
import Page404 from './components/pages/404';

const counterLoader = (location, callback) => require.ensure([], require => callback(null, require('./components/counter/Counter').default));
const homeLoader = (location, callback) => require.ensure([], require => callback(null, require('./components/home/Home').default));

let routes = (
    <Route path="/" component={Layout}>
        <IndexRoute getComponent={counterLoader} />
        <Route path="home" getComponent={homeLoader}/>

        <Route path="*" component={Page404} />
    </Route>
);

export default routes;
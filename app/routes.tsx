import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/Layout';
import {Page404} from './components/pages/404';
import ArticlesList from './components/articles/ArticlesList';

declare const require: {ensure: (first:Array<any>, last: (any) => any) => any};

const counterLoader = (location, callback) => require.ensure([], require => callback(null, require('./components/counter/Counter').default));
const homeLoader = (location, callback) => require.ensure([], require => callback(null, require('./components/home/Home').default));

let routes = (
    <Route path="/" component={Layout}>
        <IndexRoute getComponent={counterLoader} />
        <Route path="home" getComponent={homeLoader}/>
        <Route path="articles" component={ArticlesList} />

        <Route path="*" component={Page404} />
    </Route>
);

export default routes;
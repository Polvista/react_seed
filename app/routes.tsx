import * as React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout/Layout';
import {Page404} from './components/pages/404';
import ArticlesContainer from './components/articles/ArticlesContainer';
import {Counter} from "./components/counter/Counter";

declare const require: {ensure: (first:Array<any>, last: (any) => any) => any};

const counterLoader = (location, callback) => require.ensure([], require => callback(null, require('./components/counter/Counter').default));

let routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={Counter} />
        <Route path="articles" component={ArticlesContainer} />

        <Route path="*" component={Page404} />
    </Route>
);

export default routes;
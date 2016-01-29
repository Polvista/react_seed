import '../lib/bootstrap/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider, connect } from 'react-redux';
import configureStore from './store';
import DevTools from './helpers/DevTools';
import routes from './routes';

const isDev = true;

ReactDOM.render(
    <Provider store={configureStore()}>
        <div>
            <Router history={browserHistory}>{routes}</Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
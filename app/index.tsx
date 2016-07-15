/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/custom.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/store';
import {App} from "./App";

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <App store={store} history={history} />,
    document.getElementById('root')
);
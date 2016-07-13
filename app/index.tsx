/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../typings/custom.d.ts" />

import './app.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Router, Route, Link, browserHistory } from 'react-router'
import { Provider, connect } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/store';
import routes from './routes';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

class App extends React.Component<{},{}> {
    render(){
        return (
            <Provider store={store}>
                <div>
                    <Router history={history} routes={routes}/>
                </div>
            </Provider>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
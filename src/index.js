import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Counter from './counter/Counter';
import configureStore from './store';
import DevTools from './helpers/DevTools';

const isDev = true;

ReactDOM.render(
    <Provider store={configureStore()}>
        <div>
            <Counter />
            {isDev ? <DevTools/> : '' }
        </div>
    </Provider>,
    document.getElementById('root')
);
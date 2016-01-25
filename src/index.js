import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Counter from './counter/Counter';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
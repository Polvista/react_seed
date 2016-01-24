import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import Counter from './Counter';
import configureStore from './../store/configureStore';
import test from '../test';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Counter />
    </Provider>,
    document.getElementById('root')
);
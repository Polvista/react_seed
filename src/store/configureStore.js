import { createStore, combineReducers } from 'redux';
import rootReducer from './../reducers/index';

export default function configureStore(initialState) {
    console.log('store');
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/', () => {
            const rootReducer = require('./../reducers/index');
            store.replaceReducer(rootReducer.default);
        });
    }

    return store;
}
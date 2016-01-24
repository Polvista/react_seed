import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const rootReducer = require('./reducers');
            store.replaceReducer(rootReducer.default);
        });
    }

    return store;
}
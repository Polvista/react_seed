import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from './reducers';
import DevTools from './helpers/DevTools';

const isDev = true;

const finalCreateStore = isDev
    ? compose(
        DevTools.instrument(),
        persistState(getDebugSessionKey())
      )(createStore)
    : createStore;

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
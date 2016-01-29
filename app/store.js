import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from './reducers';
import DevTools from './helpers/DevTools';

/*function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}*/

const isDev = true;

export default function configureStore(initialState) {
    const storeEnchantments = isDev ?
        compose(
            //DevTools.instrument(),
            //persistState(getDebugSessionKey()),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ) :
        undefined;

    const store = createStore(
        rootReducer,
        initialState,
        storeEnchantments
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
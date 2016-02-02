import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import DevTools from './helpers/DevTools';

/*function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}*/

const isDev = true;

export default function configureStore(initialState) {
    const reduxRouterMiddleware = syncHistory(browserHistory);
    const storeEnchantments = isDev ?
        compose(
            //DevTools.instrument(),
            //persistState(getDebugSessionKey()),
            applyMiddleware(reduxRouterMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ) :
        compose(
            applyMiddleware(reduxRouterMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        );

    const store = createStore(
        rootReducer,
        initialState,
        storeEnchantments
    );

    reduxRouterMiddleware.listenForReplays(store);

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
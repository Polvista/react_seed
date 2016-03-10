import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import rootReducer from './reducers';

/*function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    return (matches && matches.length > 0)? matches[1] : null;
}*/

const isDev = true;

interface IHotModule {
    hot?: { accept: (path: string, callback: () => void) => void };
}
declare const module: IHotModule;

interface IWindow {
    devToolsExtension?: () => any
}

declare const window: IWindow;

export default function configureStore(initialState = {}) {
    const storeEnchantments: Function = isDev ?
        compose(
            //DevTools.instrument(),
            //persistState(getDebugSessionKey()),
            //applyMiddleware(reduxRouterMiddleware),
            //window.devToolsExtension ? window.devToolsExtension() : f => f
        ) :
        compose(
            //applyMiddleware(reduxRouterMiddleware),
            //window.devToolsExtension ? window.devToolsExtension() : f => f
        );

    const store = createStore(
        rootReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const newRootReducer = require('./reducers').default;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
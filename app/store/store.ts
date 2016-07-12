import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import { rootReducer } from './rootReducer';
import { actionTypesSupport } from "./middlewares/actionTypesSupport";

interface IHotModule {
    hot?: { accept: (path: string, callback: () => void) => void };
}
declare const module: IHotModule;
declare var window: Window & DevToolsExtension;

export default function configureStore(initialState = {}) {
    const Immutable = require('seamless-immutable');
    const middlewares = [actionTypesSupport];
    const enhancers = [];

    if (process.env.ENV === 'development' && window && window.devToolsExtension) {
        const devToolsOpts = {
            deserializeState(state) {
                return Immutable(state);
            }
        };
        enhancers.push(window.devToolsExtension(devToolsOpts));
    }

    const enhancer = <() => any> compose(
        applyMiddleware(...middlewares),
        ...enhancers
    );

    const store = createStore(
        rootReducer,
        Immutable(initialState),
        enhancer
    );

    if (module.hot) {
        module.hot.accept('./rootReducer', () => {
            console.log('replacing');
            const newRootReducer = require('./rootReducer').rootReducer;
            store.replaceReducer(newRootReducer);
        });
    }

    return store;
}
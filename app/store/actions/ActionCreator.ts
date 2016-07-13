import {ActionType} from "./ActionType";
import Store = Redux.Store;
import {AppState} from "../AppState";
import { Promise } from 'axios';

export class ActionCreator {

    constructor(protected store: Store){
        const prototype = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(prototype)
            .filter(property => typeof prototype[property] === 'function' && property != 'constructor')
            .forEach(property => this[property] = prototype[property].bind(this));
    }

    dispatch(actionType: string | ActionType, payload?: any) {
        this.store.dispatch({
            type: actionType,
            payload
        });
    }

    dispatchRequest(actionType: string | ActionType, promise: Promise, payload?: any): Promise  {
        this.store.dispatch({
            type: actionType,
            promise,
            payload
        });
        return promise;
    }

    getState(): AppState {
        return this.store.getState();
    }

}
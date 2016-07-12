import {ActionType} from "./ActionType";
import Store = Redux.Store;

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

}
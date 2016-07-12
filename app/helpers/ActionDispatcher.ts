import Store = Redux.Store;

export class ActionDispatcher {
    protected store: Store;

    constructor(store: Store){
        this.store = store;

        const prototype = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(prototype)
            .filter(property => typeof prototype[property] === 'function' && property != 'constructor')
            .forEach(property => this[property] = prototype[property].bind(this));
    }

    dispatch(actionType: string, payload?){
        this.store.dispatch({
            type: actionType,
            payload
        });
    }
}

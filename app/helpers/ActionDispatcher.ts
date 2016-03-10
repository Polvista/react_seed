import Dispatch = Redux.Dispatch;

export class ActionDispatcher<T> {
    dispatcher: Dispatch;

    constructor(dispatch: Dispatch){
        this.dispatcher = dispatch;

        const prototype = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(prototype)
            .filter(property => typeof prototype[property] === 'function' && property != 'constructor')
            .forEach(property => this[property] = prototype[property].bind(this));
    }

    dispatch(actionType: string, actionPayload?: T){
        this.dispatcher(Object.assign(actionPayload || {}, {type: actionType})); //TODO find a way to not create new object
    }
}

export default class ActionCreator {
    constructor(dispatch) {
        let prototype = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(prototype)
            .filter(property => typeof prototype[property] === 'function' && property != 'constructor')
            .forEach(property => this[property] = this.bind(dispatch, prototype[property]));
    }

    bind(dispatch, method){
        return function () { dispatch(method(...arguments)) };
    }
}
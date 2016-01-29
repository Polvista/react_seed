import ActionCreator from './../helpers/ActionCreator';

export default class CounterActions extends ActionCreator {
    constructor(dispatch) { super(dispatch); }

    add(){
        return {type:'ADD'};
    }

    remove(){
        return {type: 'REMOVE'};
    }

    reset () {
        return {
            type: 'RESET'
        }
    }

    setValue (value) {
        return {
            type: 'SET_VALUE',
            value
        };
    }

}
import ActionCreator from './ActionCreator';

export default class AppActions extends ActionCreator {
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
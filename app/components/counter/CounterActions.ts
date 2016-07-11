import {ActionDispatcher} from "../../helpers/ActionDispatcher";
import Dispatch = Redux.Dispatch;

export class CounterActions extends ActionDispatcher {

    constructor(dispatch: Dispatch) {
        super(dispatch);
    }

    add() {
        this.dispatch('ADD');
    }

    remove(){
        this.dispatch('REMOVE');
    }

    reset () {
        this.dispatch('RESET');
    }

    setValue(value) {
        this.dispatch('SET_VALUE', value);
    }

}
import Store = Redux.Store;
import {ActionCreator} from "../../store/actions/ActionCreator";

export class CounterActions extends ActionCreator {

    constructor(store: Store) {
        super(store);
    }

    add = () => this.dispatch('ADD');

    remove = () => this.dispatch('REMOVE');

    reset = () => this.dispatch('RESET');

    setValue = (value) => this.dispatch('SET_VALUE', value);

}
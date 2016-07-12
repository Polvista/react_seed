import {ActionDispatcher} from "../../helpers/ActionDispatcher";
import Store = Redux.Store;

export class CounterActions extends ActionDispatcher {

    constructor(store: Store) {
        super(store);
    }

    add = () => this.dispatch('ADD');

    remove = () => this.dispatch('REMOVE');

    reset = () => this.dispatch('RESET');

    setValue = (value) => this.dispatch('SET_VALUE', value);

}
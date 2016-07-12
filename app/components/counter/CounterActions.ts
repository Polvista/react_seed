import Store = Redux.Store;
import {ActionCreator} from "../../store/actions/ActionCreator";
import {ActionTypeCreator} from "../../store/actions/ActionTypeCreator";

export class CounterActions extends ActionCreator {
    private static typeCreator = new ActionTypeCreator('COUNTER');
    static ADD = CounterActions.typeCreator.type('ADD');
    static REMOVE = CounterActions.typeCreator.type('REMOVE');
    static RESET = CounterActions.typeCreator.type('RESET');
    static SET_VALUE = CounterActions.typeCreator.type('SET_VALUE');

    constructor(store: Store) {
        super(store);
    }

    add = () => this.dispatch(CounterActions.ADD);

    remove = () => this.dispatch(CounterActions.REMOVE);

    reset = () => this.dispatch(CounterActions.RESET);

    setValue = (value) => this.dispatch(CounterActions.SET_VALUE, value);

}
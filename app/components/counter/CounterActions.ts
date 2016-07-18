import Store = Redux.Store;
import {ActionCreator} from "../../store/actions/ActionCreator";
import {ActionTypeCreator} from "../../store/actions/ActionTypeCreator";
import * as axios from 'axios';
import {AppState} from "../../store/AppState";

export class CounterActions extends ActionCreator {
    private static typeCreator = new ActionTypeCreator('COUNTER');
    static INIT = CounterActions.typeCreator.type('INIT');
    static ADD = CounterActions.typeCreator.type('ADD');
    static REMOVE = CounterActions.typeCreator.type('REMOVE');
    static RESET = CounterActions.typeCreator.type('RESET');
    static SET_VALUE = CounterActions.typeCreator.type('SET_VALUE');
    static CLEAR = CounterActions.typeCreator.type('CLEAR');
    static LOAD = CounterActions.typeCreator.request('LOAD');

    constructor(store: Store<AppState>) {
        super(store);
    }

    init = () => {
        if(this.getState().counter == null) {
            this.dispatch(CounterActions.INIT);
        }
    };

    load() {
        const request = axios.get('/123')
            .catch(error => Promise.reject({
                id: 11,
                error
            }));

        this.dispatchRequest(CounterActions.LOAD, request, {id: 11});
    }

    add = () => this.dispatch(CounterActions.ADD);

    remove = () => this.dispatch(CounterActions.REMOVE);

    reset = () => this.dispatch(CounterActions.RESET);

    setValue = (value) => this.dispatch(CounterActions.SET_VALUE, value);

    clear = () => this.dispatch(CounterActions.CLEAR);

}
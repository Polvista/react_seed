import { action, useReturnValue } from "../../store/managers/action";
import {CounterActions} from "./CounterActions";

export class CounterManager {

    @useReturnValue
    @action(CounterActions.INIT)
    init() {
        return 0;
    }

    @useReturnValue
    @action(CounterActions.ADD)
    add(count) {
        return count + 1;
    }

    @useReturnValue
    @action(CounterActions.REMOVE)
    remove(count) {
        return count - 1;
    }

    @useReturnValue
    @action(CounterActions.RESET)
    reset(count) {
        return 0;
    }

    @useReturnValue
    @action(CounterActions.SET_VALUE)
    setValue(count, value: number) {
        return value;
    }

    @useReturnValue
    @action(CounterActions.CLEAR)
    clear() {
        return null;
    }

    @action(CounterActions.LOAD)
    loading(count, payload) {
        console.log('loading', payload);
    }

    @action(CounterActions.LOAD.ERROR)
    loadError(count, payload) {
        console.log('error', payload);
    }

}
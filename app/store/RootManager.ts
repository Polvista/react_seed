import {AppState} from "./AppState";
import { manager } from "./managers/manager";
import {CounterManager} from "../components/counter/CounterManager";

export class RootManager {

    @manager('counter')
    counterManager = new CounterManager();


}
import { Promise } from 'axios';
import {ActionType} from "./ActionType";

export interface Action {
    type: string | ActionType;
    promise?: Promise;
    payload?: any;
}
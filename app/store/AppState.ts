import {Article} from "./../components/articles/models";
import {AppRoute} from "../routes/AppRoute";

export interface AppState {
    articles?: Article[];
    counter?: number;
    routing?: AppRoute; //TODO add types
}
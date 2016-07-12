import {Article} from "./../components/articles/models";

export interface AppState {
    articles?: Article[];
    counter?: number;
}
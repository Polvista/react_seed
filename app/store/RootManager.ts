import {AppState} from "./AppState";
import { manager } from "./managers/manager";
import { reducer } from "./managers/reducer";
import {CounterManager} from "../components/counter/CounterManager";
import {ArticlesManager} from "../components/articles/ArticlesManager";
import { routerReducer } from 'react-router-redux';

export class RootManager {

    @manager('counter')
    counterManager = new CounterManager();

    @manager('articles')
    articlesManager = new ArticlesManager();

    @reducer('routing')
    routerReducer = routerReducer;

}
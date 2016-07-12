import {AppState} from "./AppState";
import { manager } from "./managers/manager";
import {CounterManager} from "../components/counter/CounterManager";
import {ArticlesManager} from "../components/articles/ArticlesManager";

export class RootManager {

    @manager('counter')
    counterManager = new CounterManager();

    @manager('articles')
    articlesManager = new ArticlesManager();

}
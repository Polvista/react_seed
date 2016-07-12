import { action, useReturnValue } from "../../store/managers/action";
import {ArticlesActions} from "./ArticlesActions";
import {Article} from "./models";

export class ArticlesManager {

    @useReturnValue
    @action(ArticlesActions.INIT)
    init(): Article[] {
        return [
            {id: 1, text: 'Netscape 2.0 ships, introducing Javascript'},
            {id: 2, text: 'Jesse James Garrett releases AJAX spec'},
            {id: 3, text: 'jQuery 1.0 released'},
            {id: 4, text: 'First underscore.js commit'},
            {id: 5, text: 'Backbone.js becomes a thing'},
            {id: 6, text: 'Angular 1.0 released'},
            {id: 7, text: 'React is open-sourced; developers rejoice'},
            {id: 8, text: 'Jesse James Garrett releases AJAX spec'},
            {id: 9, text: 'jQuery 1.0 released'},
            {id: 10, text: 'First underscore.js commit'},
            {id: 11, text: 'Backbone.js becomes a thing'},
            {id: 12, text: 'Angular 1.0 released'},
            {id: 13, text: 'React is open-sourced; developers rejoice'}
        ]
    }

    @action(ArticlesActions.SHUFFLE)
    shuffle(articles: Article[]) {
        let counter = articles.length;
        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = articles[counter];
            articles[counter] = articles[index];
            articles[index] = temp;
        }
    }
}
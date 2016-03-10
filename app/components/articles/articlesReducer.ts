import {Article} from "./models";
import {ReducerHelper} from "../../helpers/ReducerHelper";
import {ArticlesActions} from "./ArticlesActions";
import {ArticlesAction} from "./ArticlesActions";

const initialState: Article[] = [
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
];

export const articlesReducer = ReducerHelper.create(initialState, {
    SHUFFLE(state: Article[]){
        return shuffle(state)
    }
});

function shuffle(array): Article[] {
    const nextArray = [...array];

    let counter = nextArray.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = nextArray[counter];
        nextArray[counter] = nextArray[index];
        nextArray[index] = temp;
    }

    return nextArray;
}
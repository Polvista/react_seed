import {ActionDispatcher} from "../../helpers/ActionDispatcher";
import Dispatch = Redux.Dispatch;

export class ArticlesActions extends ActionDispatcher {
    constructor(dispatch){
        super(dispatch);
    }

    shuffle() {
        this.dispatch('SHUFFLE');
    }
}

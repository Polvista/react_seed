import {ActionDispatcher} from "../../helpers/ActionDispatcher";
import Dispatch = Redux.Dispatch;

export interface ArticlesAction {
}

export class ArticlesActions extends ActionDispatcher<ArticlesAction> {
    constructor(dispatch){
        super(dispatch);
    }

    shuffle() {
        this.dispatch('SHUFFLE');
    }
}

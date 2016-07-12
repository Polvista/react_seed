import Dispatch = Redux.Dispatch;
import {ActionCreator} from "../../store/actions/ActionCreator";

export class ArticlesActions extends ActionCreator {
    constructor(dispatch){
        super(dispatch);
    }

    shuffle = () => this.dispatch('SHUFFLE');

}

import Dispatch = Redux.Dispatch;
import {ActionCreator} from "../../store/actions/ActionCreator";
import {ActionTypeCreator} from "../../store/actions/ActionTypeCreator";

export class ArticlesActions extends ActionCreator {
    private static typeCreator = new ActionTypeCreator('COUNTER');
    static INIT = ArticlesActions.typeCreator.type('INIT');
    static SHUFFLE = ArticlesActions.typeCreator.type('SHUFFLE');

    constructor(dispatch){
        super(dispatch);
    }

    init = () => this.dispatch(ArticlesActions.INIT);

    shuffle = () => this.dispatch(ArticlesActions.SHUFFLE);

}

import Dispatch = Redux.Dispatch;
import {ActionCreator} from "../../store/actions/ActionCreator";
import {ActionTypeCreator} from "../../store/actions/ActionTypeCreator";

export class ArticlesActions extends ActionCreator {
    private static typeCreator = new ActionTypeCreator('ARTICLES');
    static INIT = ArticlesActions.typeCreator.type('INIT');
    static SHUFFLE = ArticlesActions.typeCreator.type('SHUFFLE');

    constructor(store){
        super(store);
    }

    init = () => this.dispatch(ArticlesActions.INIT);

    shuffle = () => this.dispatch(ArticlesActions.SHUFFLE);

}

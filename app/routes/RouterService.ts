import Store = Redux.Store;
import {AppState} from "../store/AppState";
import {AppRoute} from "./AppRoute";
import {Location} from "./AppRoute";


//TODO router types
export class RouterService {
    private changeListeners: ChangeListener[] = [];

    constructor(store: Store, router: any) {

        let unsub = router.listenBefore((loc: Location) => {
            console.log(loc);
            console.log('state', store.getState().routing.locationBeforeTransitions.pathname);

            if(this.getFullUrl(loc) != this.getFullUrl(store.getState().routing.locationBeforeTransitions)) {
                this.changeListeners.forEach((listener: ChangeListener) => listener((<AppState>store.getState()).routing));
                unsub();
            }
        });
    }

    onRouteChange(listener: ChangeListener): Unsubscribe {
        this.changeListeners.push(listener);

        return () => {
            this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
        };
    }

    //TODO учитывать хэш
    private getFullUrl(location: Location): string {
        return location.pathname + location.search;
    }

}

interface ChangeListener {
    (nextRoute: AppRoute): void;
}

export interface Unsubscribe {
    (): void;
}
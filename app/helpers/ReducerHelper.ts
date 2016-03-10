export class ReducerHelper {
    static create(initialState: any, reducersMap: any){
        return function (state: any, action: any) {
            if(!state) {
                state = initialState;
            }

            if(!action || !action.type || !reducersMap[action.type]) {
                return state;
            }

            return reducersMap[action.type](state, action);
        }
    }
}
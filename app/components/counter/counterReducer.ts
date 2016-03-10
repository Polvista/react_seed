export interface ICounterAction {
    type: string,
    value?: number
}

export default function counter(state: number = 0, action: ICounterAction): number {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            return state - 1;
        case 'RESET':
            return 0;
        case 'SET_VALUE':
            return action.value;
        default:
            return state;
    }
};
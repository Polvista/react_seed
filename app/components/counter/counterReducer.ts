export default function counter(state: number = 0, action): number {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            return state - 1;
        case 'RESET':
            return 0;
        case 'SET_VALUE':
            return action.payload;
        default:
            return state;
    }
};
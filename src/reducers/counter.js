export default function counter(state = 0, action) {
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
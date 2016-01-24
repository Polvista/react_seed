import counter from './counter/counterReducer';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
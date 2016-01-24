import counter from './counter';
import {createStore, combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter
});

export default rootReducer;
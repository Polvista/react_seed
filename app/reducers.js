import counter from './counter/counterReducer';
import {createStore, combineReducers} from 'redux';
import { routeReducer } from 'react-router-redux'

const rootReducer = combineReducers({
    counter,
    routing: routeReducer
});

export default rootReducer;
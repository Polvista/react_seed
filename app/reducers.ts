import counter from './components/counter/counterReducer';
import {articlesReducer} from './components/articles/articlesReducer';
import {createStore, combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    counter,
    articles: articlesReducer,
    routing: routerReducer
});

export default rootReducer;
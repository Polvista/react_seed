import './app.scss';

import * as React from 'react';
import Store = Redux.Store;
import { Provider } from 'react-redux';
import routes from './routes/routes';
import { Router } from 'react-router'
import {AppState} from "./store/AppState";

export class App extends React.Component<Props,{}> {
    render(){
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history} routes={routes}/>
            </Provider>
        );
    }
}

interface Props {
    store: Store<AppState>;
    history: any;
}
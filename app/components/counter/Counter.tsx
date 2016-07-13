import './counter.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Router } from 'react-router';
import {AppState} from "../../store/AppState";
import {CounterActions} from "./CounterActions";
import Dispatch = Redux.Dispatch;
import { bindStore } from "../../utils/bindStore";
import { withRouter } from "../../utils/withRouter";
import Store = Redux.Store;
import {RouterService} from "../../routes/RouterService";
import * as axios from 'axios';


const StatelessGreeting = (props: { greeting: string; store?: Store }) =>
    <div className="stateless-greeting">
        Stateless greeting: {props.greeting}
    </div>;


@connect((state: AppState) => ({
    number: state.counter
}))
@bindStore
@withRouter
export class Counter extends React.Component<Props, State> {

    counterActions = new CounterActions(this.props.store);
    routerService = new RouterService(this.props.store, this.props.router);

    state = { greeting: 'friend' };

    componentWillMount() {
        this.counterActions.init();

        const unsubscribe = this.routerService.onRouteChange(() => {
            this.counterActions.clear();
            unsubscribe();
        });
    }

    render() {
        const { number } = this.props;

        const StGreetingWithStore = bindStore(StatelessGreeting);

        return (
            <div className="counter">
                <h4>Hey {this.state.greeting}</h4>
                <StGreetingWithStore greeting="hello there!" />
                <div>
                    <p className="lead">
                        Counter: {number}
                    </p>
                </div>
                <a onClick={this.counterActions.add} className="btn btn-default">lol</a>
                <a onClick={this.counterActions.remove} className="btn btn-default">no lol</a>
                <a onClick={this.counterActions.reset} className="btn btn-default">reset</a>
                <a onClick={() => this.counterActions.setValue(20)} className="btn btn-default">set 20</a>
                <br/><br/>
                <br/>
                <Link className="home-link" to="/home">To Home fast</Link>
            </div>
        );
    }

}


interface Props {
    dispatch: Dispatch;
    number: number;
    store: Store;
    router: any;
}

interface State {
    greeting: string;
}
import './counter.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {AppState} from "../../store/AppState";
import {CounterActions} from "./CounterActions";
import Dispatch = Redux.Dispatch;
import { bindStore } from "../../utils/bindStore";
import Store = Redux.Store;


const StatelessGreeting = (props: { greeting: string; store?: Store }) =>
    <div className="stateless-greeting">
        Stateless greeting: {props.greeting}
    </div>;


@connect((state: AppState) => ({
    number: state.counter
}))
@bindStore
export class Counter extends React.Component<Props, State> {

    counterActions = new CounterActions(this.props.store);

    state = { greeting: 'friend' };

    constructor(props) {
        super(props);

        this.counterActions.init();
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
}

interface State {
    greeting: string;
}
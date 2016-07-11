import './counter.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {AppState} from "../../models";
import {CounterActions} from "./CounterActions";
import Dispatch = Redux.Dispatch;


@connect((state: AppState) => ({
    number: state.counter
}))
export class Counter extends React.Component<Props, State> {

    counterActions = new CounterActions(this.props.dispatch);

    state = { greeting: 'friend' };

    render() {
        const { number } = this.props;

        return (
            <div className="counter">
                <h4>Hey {this.state.greeting}</h4>
                <div>
                    <p className="lead">
                        Counter: {this.props.number}
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
}

interface State {
    greeting: string;
}
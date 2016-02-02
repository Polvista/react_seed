import './counter.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import CounterActions from './counterActions';

class Counter extends React.Component {
    render() {
        let {number, dispatch} = this.props;
        let counterActions = new CounterActions(dispatch);

        return (
            <div className="counter">
                <h4>Hey</h4>
                <p className="lead">Counter: {number}</p>
                <a onClick={counterActions.add} className="btn btn-default">lol</a>
                <a onClick={counterActions.remove} className="btn btn-default">no lol</a>
                <a onClick={counterActions.reset} className="btn btn-default">reset</a>
                <a onClick={() => counterActions.setValue(20)} className="btn btn-default">set 20</a>
                <br/>
                <Link className="home-link" to="/home">To Home</Link>
            </div>
        );
    }
}

export default Counter = connect(state => ({number: state.counter}))(Counter);

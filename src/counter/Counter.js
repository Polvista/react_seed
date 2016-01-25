import './counter.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import CounterActions from './counterActions';

class Counter extends React.Component {
    render() {
        let {number, dispatch} = this.props;
        let counterActions = new CounterActions(dispatch);

        return (
            <div className="counter">
                <h4>Hey</h4>
                <p className="lead">Counter: {number}</p>
                <button onClick={counterActions.add} className="btn btn-default">lol</button>
                <button onClick={counterActions.remove} className="btn btn-default">no lol</button>
                <button onClick={counterActions.reset} className="btn btn-default">reset</button>
                <button onClick={() => counterActions.setValue(20)} className="btn btn-default">set 20</button>
            </div>
        );
    }
}

export default Counter = connect(state => ({number: state.counter}))(Counter);

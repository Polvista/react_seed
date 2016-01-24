import { Provider, connect } from 'react-redux';
import React from 'react';
import CounterActions from './counterActions';

class Counter extends React.Component {
    render() {
        let {number, dispatch} = this.props;
        let counterActions = new CounterActions(dispatch);

        return (
            <div>
                Counter: {number} <br/>
                <button onClick={counterActions.add}>lol</button>
                <button onClick={counterActions.remove}>no lol</button>
                <button onClick={counterActions.reset}>reset</button>
                <button onClick={() => counterActions.setValue(20)}>set 20</button>
            </div>
        );
    }
}

export default Counter = connect(state => ({number: state.counter}))(Counter);

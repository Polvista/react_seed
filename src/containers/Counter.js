import { Provider, connect } from 'react-redux';
import React from 'react';
import AppActions from './../AppActions';

class Counter extends React.Component {
    render() {
        let {number, dispatch} = this.props;
        let appActions = new AppActions(dispatch);

        return (
            <div>
                Counter: {number} <br/>
                <button onClick={appActions.add}>lol</button>
                <button onClick={appActions.remove}>no lol</button>
                <button onClick={appActions.reset}>reset</button>
                <button onClick={() => appActions.setValue(20)}>set 20</button>
            </div>
        );
    }
}

export default Counter = connect(state => ({number: state.counter}))(Counter);

import './counter.css';

import { Provider, connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import CounterActions from './counterActions';
import FastLink from './../common/FastLink';
import {Motion, spring, presets} from 'react-motion';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {top: 0, left: 0, scale: 1, btnScale: 1};
    }

    componentWillMount(){
        this.counterActions = new CounterActions(this.props.dispatch);
    }

    moveCounter() {
        this.setState({
            top: Math.random() * 150 - 150,
            left: Math.random() * 300 - 150,
            scale: this.state.scale == 1 ? 1.5 : 1
        });
    }

    scaleBtn(){
        if(this.state.btnHovered) {
            this.setState({btnHovered: false, btnScale: 1});
        } else {
            this.setState({btnHovered: true, btnScale: 1.6});
        }
    }

    render() {
        let {number, dispatch} = this.props;
        const motion = {
            top: spring(this.state.top, {stiffness: 50, damping: 20, precision:0.01}),
            left: spring(this.state.left, {stiffness: 50, damping: 20, precision:0.01}),
            scale: spring(this.state.scale, presets.wobbly)
        };

        return (
            <div className="counter">
                <h4>Hey</h4>
                <Motion style={motion}>
                    {style =>
                        <div>
                            <p className="lead" style={{...style, transform: `scale(${style.scale})` }}>
                                Counter: {number}
                            </p>
                        </div>
                    }
                </Motion>
                <a onClick={this.counterActions.add} className="btn btn-default">lol</a>
                <a onClick={this.counterActions.remove} className="btn btn-default">no lol</a>
                <a onClick={this.counterActions.reset} className="btn btn-default">reset</a>
                <a onClick={() => this.counterActions.setValue(20)} className="btn btn-default">set 20</a>
                <br/><br/>
                <Motion style={{btnScale: spring(this.state.btnScale, presets.wobbly)}}>
                    {style =>
                        <a onClick={() => this.moveCounter()}
                           onMouseOver={() => this.scaleBtn()}
                           onMouseOut={() => this.scaleBtn()}
                           style={{transform: `scale(${style.btnScale})`}}
                           className="btn btn-danger">Move
                        </a>
                    }
                </Motion>
                <br/>
                <FastLink className="home-link" to="/home">To Home fast</FastLink>
            </div>
        );
    }
}

export default Counter = connect(state => ({number: state.counter}))(Counter);

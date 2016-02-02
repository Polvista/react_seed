import React from 'react';
import FastLink from '../common/FastLink';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello</h3>
                <span><FastLink to="/">To counter</FastLink></span>
            </div>
        );
    }
}
import React from 'react';
import { Link } from 'react-router';


export default class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Hello</h3>
                <span><Link to="/">To counter</Link></span>
            </div>
        );
    }
}
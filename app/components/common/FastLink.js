import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';

export default class FastLink extends React.Component {

    handleMouseDown(e) {
        if( (e.nativeEvent.which || e.nativeEvent.button) === 1 ) {
            ReactDOM.findDOMNode(this.refs.link).click();
        }
    }

    render() {
        return <Link ref="link" {...this.props} onMouseDown={this.handleMouseDown.bind(this)}>{this.props.children}</Link>;
    }
}
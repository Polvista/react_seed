import * as React from 'react';
import { Link } from 'react-router';

interface Props {
    children
}

export default class Layout extends React.Component<Props,{}> {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
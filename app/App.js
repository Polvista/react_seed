import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h5>Welcome to app</h5>
                {this.props.children}
            </div>
        );
    }
}
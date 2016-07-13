//TODO use withRouter from react-router


import * as React from 'react';
import { Link, Router } from 'react-router';

export function withRouter(OrigComponent: any): typeof OrigComponent {

    return class ComponentWithRouter extends React.Component<{}, {}> {
        static contextTypes = {
            router: React.PropTypes.object.isRequired
        };

        context: {
            router: any
        };

        render() {
            const newProps = {
                router: this.context.router
            };

            return <OrigComponent {...this.props} {...newProps} />;
        }
    }
}

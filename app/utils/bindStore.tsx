import * as React from 'react';
import Store = Redux.Store;

export function bindStore(OrigComponent: any): typeof OrigComponent {

    return class ComponentWithStore extends React.Component<{}, {}> {
        static contextTypes = {
            store: React.PropTypes.object.isRequired
        };

        context: {
            store: Store
        };

        render() {
            const newProps = {
                store: this.context.store
            };

            return <OrigComponent {...this.props} {...newProps} />;
        }
    }
}
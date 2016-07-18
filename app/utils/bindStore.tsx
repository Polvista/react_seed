import * as React from 'react';
import Store = Redux.Store;
import {AppState} from "../store/AppState";

export function bindStore(OrigComponent: any): typeof OrigComponent {

    return class ComponentWithStore extends React.Component<{}, {}> {
        static contextTypes = {
            store: React.PropTypes.object.isRequired
        };

        context: {
            store: Store<AppState>
        };

        render() {
            const newProps = {
                store: this.context.store
            };

            return <OrigComponent {...this.props} {...newProps} />;
        }
    }
}
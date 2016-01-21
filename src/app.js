const { createStore } = Redux;
const { Provider, connect } = ReactRedux;

let appReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        default:
            return state;
    }
};

let AppStore = createStore(appReducer);

let AppActions = {
    add(){
        AppStore.dispatch({type:'ADD'});
    }
};

class App extends React.Component {
    divClicked(){
        AppActions.add();
    }

    render() {
        let {number} = this.props;

        return (
            <div>
                {number} <br/>
                <button onClick={this.divClicked}>lol</button>
            </div>
        );
    }
}

App = connect(state => ({number: state}))(App);

ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
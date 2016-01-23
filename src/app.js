const { createStore, combineReducers, bindActionCreators } = Redux;
const { Provider, connect } = ReactRedux;

let counter = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            return state - 1;
        case 'RESET':
            return 0;
        case 'SET_VALUE':
            return action.value;
        default:
            return state;
    }
};

let appReducers = combineReducers({
    counter
});

let AppStore = createStore(appReducers);

class ActionCreator {
    constructor(dispatch) {
        let prototype = Object.getPrototypeOf(this);
        Object.getOwnPropertyNames(prototype)
            .filter(property => typeof prototype[property] === 'function' && property != 'constructor')
            .forEach(property => this[property] = this.bind(dispatch, prototype[property]));
    }

    bind(dispatch, method){
        return function () { dispatch(method(...arguments)) };
    }
}

class AppActions extends ActionCreator {
    constructor(dispatch) { super(dispatch); }

    add(){
        return {type:'ADD'};
    }

    remove(){
        return {type: 'REMOVE'};
    }

    reset () {
        return {
            type: 'RESET'
        }
    }

    setValue (value) {
        return {
            type: 'SET_VALUE',
            value
        };
    }

}

class App extends React.Component {
    divClicked(){
        //AppActions.add();
    }

    render() {
        let {number, dispatch} = this.props;
        let appActions = new AppActions(dispatch);

        return (
            <div>
                {number} <br/>
                <button onClick={appActions.add}>lol</button>
                <button onClick={appActions.remove}>no lol</button>
                <button onClick={appActions.reset}>reset</button>
                <button onClick={() => appActions.setValue(20)}>set 20</button>
            </div>
        );
    }
}

App = connect(state => ({number: state.counter}))(App);

ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
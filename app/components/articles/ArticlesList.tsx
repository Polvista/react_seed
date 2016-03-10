import './articles.css';

import * as React from 'react';
import { connect } from 'react-redux';
import {Article} from "./models";
import Dispatch = Redux.Dispatch;
import {ArticlesActions} from "./ArticlesActions";
import {AppState} from "../../models";
let FlipMove = require('react-flip-move');

enum LAYOUT {Grid, List}

@connect(
    (state: AppState) => ({articles: state.articles}),
    dispatch => ({actions: new ArticlesActions(dispatch)})
)
export default class ArticlesList extends React.Component<Props, State> {
    constructor(){
        super();
        this.state = {style: LAYOUT.Grid};
    }

    changeStyle(){
        this.setState({style: this.state.style == LAYOUT.Grid ? LAYOUT.List : LAYOUT.Grid});
    }

    render() {
        return (
            <div className="articles">
                <div className="shuffle">
                    <a onClick={this.props.actions.shuffle} className="btn btn-default">Shuffle</a>
                    <a onClick={() => this.changeStyle()} className="btn btn-default">Change style</a>
                </div>
                <FlipMove staggerDelayBy={20}>
                    {this.props.articles.map(article =>
                        <article key={article.id}
                                 className={LAYOUT[this.state.style].toLowerCase()}>
                            {article.text}
                        </article>
                    )}
                </FlipMove>
            </div>
        );
    }
}

interface State {
    style?: LAYOUT
}

interface Props {
    articles: Array<Article>,
    actions: ArticlesActions
}
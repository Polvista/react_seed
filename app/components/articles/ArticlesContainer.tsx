import './articles.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import {Article} from "./models";
import Dispatch = Redux.Dispatch;
import {ArticlesActions} from "./ArticlesActions";
import {AppState} from "../../store/AppState";
import {Articles} from "./Articles";

@connect(
    (state: AppState) => ({articles: state.articles}),
    dispatch => ({actions: new ArticlesActions(dispatch)})
)
export default class ArticlesContainer extends React.Component<Props, {}> {
    render() {
        return <Articles shuffle={this.props.actions.shuffle}
                         articles={this.props.articles} />
    }
}

interface Props {
    actions: ArticlesActions,
    articles: Article[]
}


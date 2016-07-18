import './articles.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import {Article} from "./models";
import Dispatch = Redux.Dispatch;
import {ArticlesActions} from "./ArticlesActions";
import {AppState} from "../../store/AppState";
import {Articles} from "./Articles";
import Store = Redux.Store;
import {bindStore} from "../../utils/bindStore";

const mapStateToProps = (state: AppState) => ({articles: state.articles});

@bindStore
class ArticlesContainerView extends React.Component<Props, {}> {
    articlesActions = new ArticlesActions(this.props.store);

    constructor(props) {
        super(props);

        this.articlesActions.init();
    }

    render() {
        if(this.props.articles) {
            return <Articles shuffle={this.articlesActions.shuffle} articles={this.props.articles} />
        }

        return null;
    }
}

export const ArticlesContainer = connect(mapStateToProps)(ArticlesContainerView);

interface Props {
    articles: Article[],
    store: Store<AppState>
}


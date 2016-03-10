import * as React from 'react';
import {ArticlesActions} from "./ArticlesActions";
import {Article} from "./models";
let FlipMove = require('react-flip-move');

enum LAYOUT {Grid, List}

export class Articles extends React.Component<Props, State> {
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
                    <a onClick={this.props.shuffle} className="btn btn-default">Shuffle</a>
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

interface Props {
    articles: Array<Article>,
    shuffle: Function
}

interface State {
    style?: LAYOUT
}

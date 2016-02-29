import './articles.css';

import React from 'react';
import FlipMove from 'react-flip-move';

export default class ArticlesList extends React.Component {
    constructor(){
        super();

        this.state = {articles: [
            {id: 1, text: 'Netscape 2.0 ships, introducing Javascript'},
            {id: 2, text: 'Jesse James Garrett releases AJAX spec'},
            {id: 3, text: 'jQuery 1.0 released'},
            {id: 4, text: 'First underscore.js commit'},
            {id: 5, text: 'Backbone.js becomes a thing'},
            {id: 6, text: 'Angular 1.0 released'},
            {id: 7, text: 'React is open-sourced; developers rejoice'},
            {id: 8, text: 'Jesse James Garrett releases AJAX spec'},
            {id: 9, text: 'jQuery 1.0 released'},
            {id: 10, text: 'First underscore.js commit'},
            {id: 11, text: 'Backbone.js becomes a thing'},
            {id: 12, text: 'Angular 1.0 released'},
            {id: 13, text: 'React is open-sourced; developers rejoice'}
        ], style: 'grid'};

    }

    shuffle() {
        this.setState({articles: shuffle(this.state.articles)});

        function shuffle(array) {
            let counter = array.length;

            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                let index = Math.floor(Math.random() * counter);

                // Decrease counter by 1
                counter--;

                // And swap the last element with it
                let temp = array[counter];
                array[counter] = array[index];
                array[index] = temp;
            }

            return array;
        }
    }

    changeStyle(){
        this.setState({style: this.state.style == 'grid' ? 'list' : 'grid'});
    }

    render() {
        return (
            <div className="articles">
                <div className="shuffle">
                    <a onClick={() => this.shuffle()} className="btn btn-default">Shuffle</a>
                    <a onClick={() => this.changeStyle()} className="btn btn-default">Change style</a>
                </div>
                <FlipMove staggerDurationBy="20">
                    {this.state.articles.map(article => <article key={article.id} className={this.state.style}>{article.text}</article>)}
                </FlipMove>
            </div>
        );
    }
}
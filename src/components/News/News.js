import React, { Component } from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        }
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/' + this.props.news.type + '?' + this.props.news.query + '&apiKey=b7fb0711403a4610ae6cd56cd884a384'

        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    renderItems() {
        return this.state.news.map((eachItem, key) => {
            return (
                <NewSingle key={key} item={eachItem} />
            )

        })
    }

    render() {

        return (
            <div className="row">
                {this.renderItems()}
            </div>
        )
    }
}

export default News;

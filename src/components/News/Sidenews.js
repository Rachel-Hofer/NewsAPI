import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
        }
    }

    componentDidMount() {
        const url = 'http://newsapi.org/v2/' + this.props.news.type + '?' + this.props.news.query + '&apiKey=b7fb0711403a4610ae6cd56cd884a384'

        axios.get(url)
            .then((response) => {
                console.log('axios response', response)
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderItems() {
        return this.state.sidenews.map((eachItem, key) => {
            return (
                <SingleSide key={key} item={eachItem} />
            )
        })
    }

    render() {

        return (
            <div>
                {this.renderItems()}
            </div>
        )
    }
}

export default Sidenews;
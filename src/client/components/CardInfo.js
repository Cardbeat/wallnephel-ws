import React, { Component } from 'react';


export default class CardInfo extends Component {
    render() {
        let categories = this.props.post.categories.map( (categorie, index) => {
            return (
                <li class="collection-item" key={index}>{categorie}</li>
            )
        })
        return (
            <div>
                <h1 className="center card-title grey-text text-darken-4">{this.props.post.name}<i className="material-icons right">close</i></h1>
                <ul class="collection with-header">
                    <li class="collection-header"><h6>Categories:</h6></li>
                    {categories}
                </ul>
            </div>
        )
    }
}
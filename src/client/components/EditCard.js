import React, { Component } from 'react'
import MdInputChips from "react-mdchips";


export default class EditCard extends Component {
    render() {
        let categories = this.props.post.categories.map( (categorie, index) => {
            return (
                <li class="collection-item" key={index}><input type='text' defaultValue={categorie} /></li>
            )
        })
        return (
            <div>
                <h1 className="center card-title grey-text text-darken-4"><input type='text' defaultValue={this.props.post.name} /><i className="material-icons right">close</i></h1>
                <input type='file' />
                <ul class="collection with-header">
                    <li class="collection-header"><h6>Categories:</h6></li>
                    <MdInputChips placeholder="Categories" containerClassName="outer-tags-div" chips={this.props.post.categories} inputClassName="tags-input" max="10" />
                </ul>
            </div>
        )
    }
}
import React, { Component } from 'react'
import MdInputChips from "react-mdchips";


export default class EditCard extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            categories: [],
            image: '',
            file: ''
        }
        this.getFile = this.getFile.bind(this)
        this.getName = this.getName.bind(this)
    }

    componentWillMount() {
        this.setState({
            name: this.props.post.name,
            categories: this.props.post.categories,
            image: this.props.post.image,
            file: ''
        })
        this.getFile = this.getFile.bind(this)
    }

    getFile(e) {
        let img = e.target.files[0].name
        if(this.props.post.image !== e.target.files[0].name) {
            firebase.storage().ref().child(`images/${this.props.post.image}`).delete()
            const uploadTask = firebase.storage().ref('images/' + e.target.files[0].name).put(e.target.files[0])
        uploadTask.on('state_changed',  
    
    (snapshot) => {
    },
    
    (error) => {
        console.log(error)
    },
    
    () => {
        this.props.newPost({
            name: this.props.post.name,
            categories: this.props.post.categories,
            image: img
        })
     }
    )
        }
    }

    getName(e) {
        let name = document.getElementById('name').value
        this.props.newPost({
            name: name,
            categories: this.props.post.categories,
            image: this.props.post.image
        })
        
        
    }

    onBlurEvt(e) {
        this.props.newPost({
            name: this.props.post.name,
            categories: e,
            image: this.props.post.image
        })
    }

    onEnterEvt(e) {
        this.props.newPost({
            name: this.props.post.name,
            categories: e,
            image: this.props.post.image
        })
    }

    render() {
        let categories = this.props.post.categories.map( (categorie, index) => {
            return (
                <li class="collection-item" key={index}><input type='text' defaultValue={categorie} /></li>
            )
        })
        return (
            <div>
                <h1 className="center card-title grey-text text-darken-4"><i className="material-icons right">close</i><input onChange={this.getName} id='name' type='text' defaultValue={this.props.post.name} /></h1>
                <input id='newFile' onChange={this.getFile} type='file' />
                <ul class="collection with-header">
                    <li class="collection-header"><h6>Categories:</h6></li>
                    <MdInputChips  
                        placeholder="Categories" 
                        onBlur={this.onBlurEvt.bind(this)}
                        chips={this.props.post.categories} 
                        onEnter={this.onEnterEvt.bind(this)} 
                        max="10" 
                    />
                </ul>
            </div>
        )
    }
}
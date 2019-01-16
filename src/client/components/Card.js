import React, { Component } from 'react'
import CardInfo from './CardInfo'
import EditCard from './EditCard'


export default class Exhibition extends Component {
    constructor(props) {
        super()
        this.state = {
            url: '',
            edit: false,
            update: []
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    componentWillMount() {
        // this.props.post
        let image = this.props.post.image
        firebase.storage().ref().child(`images/${image}`).getDownloadURL().then( url => {
            this.setState({
                url: url
            })
            
        })
    }

    handleRemove() {
        if(confirm('Are you sure you want to delete? this post?')) {
            firebase.storage().ref().child(`images/${this.props.post.image}`).delete()
        db.collection('posts').doc(this.props.id).delete()
        this.props.removeCard(this.props.cardNumber)
        }

    }

    handleEdit() {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleUpdate(newPost) {
        // this.setState({
        //     update: newPost
        // })
        db.collection('posts').doc(this.props.id).set({
            name: newPost.name,
            categories: newPost.categories,
            image: newPost.image
        })
        firebase.storage().ref().child(`images/${newPost.image}`).getDownloadURL().then( url => {
            this.setState({
                url: url
            })
            
        })
        
    }

    render() {
        if(this.state.url === '') {
            return (
                <div className="col s12 m6 l3">
                    <div className="centerLoader preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                            </div><div className="gap-patch">
                            <div className="circle"></div>
                        </div>
                        <div className="circle-clipper right">
                            <div className="circle"></div>
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        return (
            <div className="card large col s12 m6 l3">
                <div className=" waves-effect waves-block waves-light">
                    <img className="activator imageCard" src={this.state.url} height='600' width='400' />
                </div>
                
                <div className="card-reveal">
                    {this.state.edit? < EditCard newPost={this.handleUpdate} post={this.props.post}/> : < CardInfo post={this.props.post} />}
                    <div className="buttons ">
                    {this.state.edit?
                        <a onClick={this.handleEdit} className="edit right btn-floating btn-large waves-effect waves-light  cyan"><i class="material-icons">check</i></a>
                        :
                        <a onClick={this.handleEdit} className="edit right btn-floating btn-large waves-effect waves-light  cyan"><i class="material-icons">edit</i></a>    
                    }
                        <a onClick={this.handleRemove} className="remove left  btn-floating btn-large waves-effect waves-light  red"><i class="material-icons">remove</i></a>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react'


export default class Exhibition extends Component {
    constructor(props) {
        super()
        this.state = {
            url: ''
        }
    }
    componentWillMount() {
        // this.props.post
        let image = this.props.post.image
        firebase.storage().ref().child(`images/${image}`).getDownloadURL().then( url => {
            this.setState({
                url: url
            })
            console.log(this.state.url)
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

        let categories = this.props.post.categories.map( (categorie, index) => {
            return (
                <li class="collection-item" key={index}>{categorie}</li>
            )
        })
        return (
            <div className="card large col s12 m6 l3">
                <div className=" waves-effect waves-block waves-light">
                    <img className="activator imageCard" src={this.state.url} height='600' width='400' />
                </div>
                
                <div className="card-reveal">
                    <h1 className="card-title grey-text text-darken-4">{this.props.post.name}<i class="material-icons right">close</i></h1>
                    <ul class="collection with-header">
                        <li class="collection-header"><h6>Categories:</h6></li>
                        {categories}
                    </ul>
                </div>
            </div>
        )
    }
}
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
        return (
            <div className="card small">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={this.state.url} />>
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
                    <p><a href="#">This is a link</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        )
    }
}
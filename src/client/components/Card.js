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
            <div>
                <img src={this.state.url} height='600' width='400' />
            </div>
        )
    }
}
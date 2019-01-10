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
        console.log(image)
        firebase.storage().ref('posts').child(image).getDownloadURL().then( url => {
            console.log(url.toString())
        })
    }

    render() {
        return (
            <div>
                <h1>isto é um card</h1>
            </div>
        )
    }
}
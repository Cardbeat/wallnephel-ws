import React, { Component } from 'react'
import Card from './Card'


export default class Exhibition extends Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        db.collection('posts').get().then((snapshot) => {
            snapshot.docs.map( doc => {
                this.setState({
                    data: [...this.state.data, { id: doc.id, data: doc.data()}]
                })
            })
        })
    }

    render() {
        let card = this.state.data.map( (post , index) => {
            return < Card post={post.data} id={post.id} key={index}/>
        })
        return (
            <div>
                <div className="row">
                    {card}
                </div>
            </div>
        )
    }
}
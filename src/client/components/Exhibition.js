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
                    data: [...this.state.data, doc.data()]
                })
            })
        })
    }

    render() {
        let card = this.state.data.map( (post , index) => {
            return < Card post={post} key={index}/>
        })
        return (
            <div>
                {card}
            </div>
        )
    }
}
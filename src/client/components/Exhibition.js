import React, { Component } from 'react'
import Card from './Card'


export default class Exhibition extends Component {
    constructor(props) {
        super()
        this.state = {
            data: []
        }
        this.removeCard = this.removeCard.bind(this)
    }

    componentWillMount() {
        db.collection('posts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.map(change => {
                    if(change.type === 'added') {
                        this.setState({
                            data: [...this.state.data, { id: change.doc.id, data: change.doc.data()}]
                        })
                    } else if(change.type === 'modified') {
                        console.log('changed')
                        let update = this.state.data
                        update.map((item, index) => {
                            if(item.id === change.doc.id) {
                                update[index] = {id: change.doc.id, data: change.doc.data()}
                            }
                        })
                        this.setState({
                            data: update
                        })
                    }
            })
        })
    }

    removeCard(number) {
        let tempData = this.state.data
        tempData.splice(number, 1)
        this.setState({
            data: tempData
        })
    }

    updateCard(e) {

    }

    render() {
        let card = this.state.data.map( (post , index) => {
            return < Card post={post.data} id={post.id} cardNumber={index} removeCard={this.removeCard} key={index}/>
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

// make this render realtime, snapshot everything 
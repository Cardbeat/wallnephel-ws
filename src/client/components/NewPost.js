import React, { Component } from 'react'
import MdInputChips from "react-mdchips";
import Image from './Image'


export default class NewPost extends Component {
  constructor(props) {
    super()
    this.state = {
      image: '',
      categories: [],
      name: ''
    }

    this.getImage = this.getImage.bind(this)
    this.getName = this.getName.bind(this)
  }
    render() {
      if (this.props.isOpen === false) return null;   
      return (
        <div>
          <div className="backdropStyle" onClick={e => this.close(e)}></div>
          <div className="modalStyle">
            <div className="newRecipeStyle">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                  < Image getImage={this.getImage} />
                </div>
                <div>
                  <input  id="name" type="text" onChange={this.getName} placeholder="Name" required className="validate" />
                </div>
                <div>
                  <MdInputChips placeholder="Categories" containerClassName="outer-tags-div" onEnter={this.onEnterEvt.bind(this)} inputClassName="tags-input" max="10" />
                </div>
                <button className="btn orange lighten-1"> create post </button>
              </form>
            </div>
          </div>
        </div>
      );
    }

    onEnterEvt(e) {
      this.setState({
        categories: e
      })
    }

    getName() {
      let name = document.getElementById('name').value
      this.setState({
        name: name
      })
    }

    close(e) {
      e.preventDefault();
      if (this.props.onClose) {
        this.props.onClose()
      }
    }
    
    handleSubmit(e) {
      e.preventDefault()
      // api call db collection
      db.collection('posts').add({
        name: this.state.name,
        image: this.state.image,
        categories: this.state.categories
      })
      this.props.onClose()
    }

    getImage(img) {
      console.log(img)
      this.setState({
        image: img
      })
    }


  }


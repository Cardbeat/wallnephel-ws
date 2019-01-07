import React, { Component } from 'react'
import MdInputChips from "react-mdchips";
import Image from './Image'


export default class NewPost extends Component {
  constructor(props) {
    super()
    this.state = {
      image: ''
    }

    this.getImage = this.getImage.bind(this)
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
                  <input  id="name" type="text" placeholder="Name"  className="validate" />
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
      console.log(e)
    }

    close(e) {
      e.preventDefault();
      if (this.props.onClose) {
        this.props.onClose()
      }
    }
    
    handleSubmit(e) {
      e.preventDefault()
    }

    getImage(img) {
      this.setState({
        image: img
      })


    }


  }


  // make API calls for upload  image to storage and a reference to realtime database

  // make db collection from api call, you can render if you want 
  
  // needed to work with firestore and cloud database
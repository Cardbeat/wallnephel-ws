import React, { Component } from 'react'
import NewPost from './NewPost'
import Exhibition from './Exhibition'
import { Redirect } from 'react-router'


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
          modal: "hide",
          isModalNewOpen: false
        };
      }
      render() {
        if(this.props.location.state === undefined) {
          return <Redirect to='/' />
        }
        return (
            <div>
                <nav className="deep-purple darken-1">
                  <div className="nav-wrapper container ">
                  <img className="logo" src='https://i.imgur.com/Alvd65L.png' height='54' width='54' />
                    <ul id="nav-mobile" class="right ">
                        <li><button className="btn purple lighten-4" onClick={() => this.openModalNew()}> New Post </button></li>
                    </ul>
                  </div>
                </nav>
            <div>
            < Exhibition />
              <div>
                <div>
                  <NewPost
                    isOpen={this.state.isModalNewOpen}
                    onClose={() => this.closeModal()}
                  />
                </div>
              </div>
            </div>
        </div>
        );
      }
    
      openModalNew() {
        this.setState({ isModalNewOpen: true });
      }
    
      closeModal() {
        this.setState({ isModalNewOpen: false });
        this.setState({ isModalEditOpen: false });
      }
        
}



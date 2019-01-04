import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Dashboard from './Dashboard'


export default class Login extends Component {
    constructor() {
      super()
      this.state= {
        toDashboard : false
      }
      this.handleSubmit =  this.handleSubmit.bind(this)
    }
  
    handleSubmit(event) {
      event.preventDefault()
      let name = document.getElementById('name').value
      let password = document.getElementById('password').value
      let data = {
          name: name,
          password: password
      }
      fetch('/login/admin', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json'
        }
    }).then(result => result.json().then(data => {
      if( data === true ) {
        this.setState({
          toDashboard: true
        })
      }
    }
))
    }
  
    render() {
      if(this.state.toDashboard) {
        return <Redirect to='/dashboard/'/>
      }
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" required id="name" />
                </label>
                <label>
                Password:
                <input type="password" required id="password" />
                </label>
                <input type="submit" value="Submit" />
                </form>
        </div>
      );
    }
  }
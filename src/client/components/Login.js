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
        return <Redirect to={{
          pathname:'/dashboard',
          state: { islogged: true}
        }} />
      }
      return (
        <div className='background'>
        <div className="login">
                <div className="row">
                  <div className="col s12">
                    <div className="card white">
                      <div className="card-content">
                        <form onSubmit={this.handleSubmit}>
                          <label>
                            Name:
                            <input type="text" required id="name" />
                          </label>
                          <label>
                            Password:
                            <input type="password" required id="password" />
                          </label>
                        <input className='btn waves-light blue darken-4 loginButton' type="submit" value="Login" />
                      </form>
                  </div>
                </div>
              </div>
          </div>
        </div>
       </div>
      );
    }
  }
import React, { Component } from 'react'


export default class Login extends Component {
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
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
    }).then(result => result.json().then(data => 
        console.log('added')
))
    }
  
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" id="name" />
                </label>
                <label>
                Password:
                <input type="text" id="password" />
                </label>
                <input type="submit" value="Submit" />
                </form>
        </div>
      );
    }
  }
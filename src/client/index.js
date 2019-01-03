import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
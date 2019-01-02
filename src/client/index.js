import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login} />
      </div>
    </Router>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root'));
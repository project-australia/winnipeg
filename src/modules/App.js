import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
import '../stylesheets/App.css'
import { withAuthentication } from './shared/highOrderComponents/authenticationHOC'

const TestComponent = () => (
  <p>Logged In</p>
);

export class App extends Component {
  render () {
    const LoggedInComponent = withAuthentication(TestComponent)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {<LoggedInComponent />}
      </div>
    )
  }
}

import React, { Component } from 'react'
import logo from '../assets/images/logo.svg'
import '../stylesheets/App.css'
import { SignInContainer } from '../modules/authentication/containers/signInContainer'

export class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SignInContainer />
      </div>
    )
  }
}

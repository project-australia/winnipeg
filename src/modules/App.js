import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../assets/images/logo.svg'
import '../stylesheets/App.css'
import { logOutAction } from '../redux/actions/async'
import { userSelector } from '../redux/selectors/authenticationSelectors'
import { SignUpContainer } from './authentication/containers/SignUpContainer'
import { withAuthentication } from './shared/highOrderComponents/authenticationHOC'

const TestComponent = (props) => (
  <p>Logged In {props.email}</p>
)

class AppContainer extends Component {
  render () {
    const LoggedInComponent = withAuthentication(TestComponent)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoggedInComponent email={this.props.user.email} />
        <SignUpContainer />
        <h3 onClick={this.props.logOut}> Click to Log out </h3>
      </div>
    )
  }
}

export const App = connect(
  (state) => ({
    user: userSelector(state)
  }),
  {
    logOut: logOutAction
  }
)(AppContainer)

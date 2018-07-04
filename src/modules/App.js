import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { logOutAction } from '../redux/actions/async'
import { userSelector } from '../redux/selectors/authenticationSelectors'
import '../stylesheets/App.css'
import { SignUpContainer } from './authentication/containers/SignUpContainer'
import { ROUTES } from './Router'
import { withAuthentication } from './shared/highOrderComponents/authenticationHOC'

const TestComponent = (props) => (
  <p>Logged In {props.email}</p>
)

class AppContainer extends Component {
  render () {
    // TODO: Quando adicionar a navegacao pode remover as duas linhas abaixo
    const LoggedInComponent = withAuthentication(TestComponent)
    const SignUpComponent = this.props.user.isLoggedIn() ? null : <SignUpContainer />
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LoggedInComponent email={this.props.user.email} />
        {SignUpComponent}
        <h3 onClick={this.props.logOut}> Click to Log out </h3>
        <Link to={ROUTES.SIGN_IN}>SIGN IN</Link>
        <Link to={ROUTES.SIGN_IN}>SIGN UP</Link>
        <Link to={ROUTES.HOME}>HOME</Link>
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

import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import { logOutAction } from '../redux/actions/async'
// import { userSelector } from '../redux/selectors/authenticationSelectors'

import { Header } from './shared/components/layout/Header'

import 'semantic-ui-css/semantic.min.css'
import '../stylesheets/app.css'
import { Router } from './router'

class AppContainer extends Component {
  render () {
    // TODO: Quando adicionar a navegacao pode remover as duas linhas abaixo
    // const LoggedInComponent = withAuthentication(TestComponent)
    // const SignUpComponent = this.props.user.isLoggedIn() ? null : <SignUpContainer />
    return (
      <div>
        <Header />
        <Router />
      </div>
    )
  }
}
export const App = AppContainer

// export const App = connect(
//   (state) => ({
//     user: userSelector(state)
//   }),
//   {
//     logOut: logOutAction
//   }
// )(AppContainer)

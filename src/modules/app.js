import React, { Component } from 'react'
// import { connect } from 'react-redux'

// import { logOutAction } from '../redux/actions/async'
// import { userSelector } from '../redux/selectors/authenticationSelectors'

import { Router } from './router'
import { Header } from './shared/components/layout/Header'
import { Footer } from './shared/components/layout/Footer'

import 'semantic-ui-css/semantic.min.css'
import './styles/app.css'

class AppContainer extends Component {
  render () {
    // TODO: Quando adicionar a navegacao pode remover as duas linhas abaixo
    // const LoggedInComponent = withAuthentication(TestComponent)
    // const SignUpComponent = this.props.user.isLoggedIn() ? null : <SignUpContainer />
    return (
      <div>
        <Header />
        <Router />
        <Footer />
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

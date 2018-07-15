import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css'
import { Router } from './router'
import { Footer } from './shared/components/layout/Footer'
import { HeaderContainer } from './shared/containers/HeaderContainer'
import './styles/app.css'

class AppContainer extends Component {
  render () {
    return (
      <React.Fragment>
        <HeaderContainer />
        <Router />
        <Footer />
      </React.Fragment>
    )
  }
}
export const App = AppContainer

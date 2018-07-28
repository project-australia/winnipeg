import React, { Component } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'semantic-ui-css/semantic.min.css'
import { Router } from './router'
import { Footer } from './shared/components/layout/Footer'
import { Header } from './shared/containers/Header'
import './styles/app.css'
import { withAuthListener } from './shared/highOrderComponents/authenticationHOC'

class AppContainer extends Component {
  render () {
    return (
      <React.Fragment>
        <Header />
        <Router />
        <Footer />
      </React.Fragment>
    )
  }
}
export const App = withAuthListener(AppContainer)

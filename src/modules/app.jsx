import React, { Component } from 'react'

import 'semantic-ui-css/semantic.min.css'
import { Router } from './router'
import { Footer } from './shared/components/layout/Footer'
import { Header } from './shared/components/layout/Header'
import './styles/app.css'

class AppContainer extends Component {
  render () {
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

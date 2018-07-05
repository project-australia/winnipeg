import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SignInContainer } from './authentication/containers/signInContainer'
import { SignUpContainer } from './authentication/containers/signUpContainer'

import { Home } from './home/home'
import { Home2 } from './home/home2'

export const ROUTES = {
  HOME: '/',
  HOME2: '/home2',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up'
}

export const Router = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/home2' component={Home2} />

    <Route exact path={ROUTES.SIGN_IN} component={SignInContainer} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpContainer} />
  </Switch>
)

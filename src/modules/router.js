import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SignInContainer } from './authentication/containers/signInContainer'
import { SignUpContainer } from './authentication/containers/signUpContainer'

import { HomeScreen } from './home/containers/HomeScreen'

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up'
}

export const Router = () => (
  <Switch>
    <Route exact path='/' component={HomeScreen} />

    <Route exact path={ROUTES.SIGN_IN} component={SignInContainer} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpContainer} />
  </Switch>
)

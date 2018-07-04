import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SignInContainer } from './authentication/containers/signInContainer'
import { SignUpContainer } from './authentication/containers/SignUpContainer'
import { Home } from './home/home'

export const ROUTES = {
  HOME: '/home',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up'
}

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.SIGN_IN} component={SignInContainer} />
    <Route exact path={ROUTES.SIGN_UP} component={SignUpContainer} />
    <Route exact path={ROUTES.HOME} component={Home} />

    <Route component={<p>NOT FOUND</p>} />
  </Switch>
)

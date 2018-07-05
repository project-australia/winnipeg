import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { SignInContainer } from './authentication/containers/signInContainer'
import { SignUpContainer } from './authentication/containers/signUpContainer'

import { Home } from './home/home'
import { withAuthentication } from './shared/highOrderComponents/authenticationHOC'
import { TestComponent } from './test/test'

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  TEST: '/test_route'
}

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />

    <Route path={ROUTES.TEST} component={withAuthentication(TestComponent)} />
    <Route path={ROUTES.SIGN_IN} component={SignInContainer} />
    <Route path={ROUTES.SIGN_UP} component={SignUpContainer} />
  </Switch>
)

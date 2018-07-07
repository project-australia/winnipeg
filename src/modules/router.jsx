import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ForgotPasswordScreen } from './authentication/containers/forgotPasswordScreen'
import { SignInScreen } from './authentication/containers/signInScreen'
import { SignUpScreen } from './authentication/containers/signUpScreen'
import { BookListScreen } from './bookList/containers/BookListScreen'
import { HomeScreen } from './home/containers/HomeScreen'
import {
  withAuthentication,
  withAuthListener
} from './shared/highOrderComponents/authenticationHOC'
import { TestComponent } from './test/test'

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  FORGOT_PASSWORD: '/forgot_password',
  TEST: '/test_route',
  BOOKLIST: '/booklist'
}

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={HomeScreen} />
    <Route path={ROUTES.BOOKLIST} component={BookListScreen} />
    <Route path={ROUTES.TEST} component={withAuthentication(TestComponent)} />
    <Route path={ROUTES.SIGN_IN} component={withAuthListener(SignInScreen)} />
    <Route path={ROUTES.SIGN_UP} component={withAuthListener(SignUpScreen)} />
    <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
  </Switch>
)

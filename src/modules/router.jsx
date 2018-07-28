import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ForgotPasswordScreen } from './authentication/containers/forgotPasswordScreen'
import { SignInScreen } from './authentication/containers/signInScreen'
import { SignUpScreen } from './authentication/containers/signUpScreen'
import { BookListScreen } from './bookList/containers/BookListScreen'
import { HomeScreen } from './home/containers/HomeScreen'
import { BookDetailsScreen } from './book/containers/BookDetailsScreen'
import {
  withAuthentication
} from './shared/highOrderComponents/authenticationHOC'
import { ProfileScreen } from './profile/containers/ProfileScreen'

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/sign_in',
  SIGN_UP: '/sign_up',
  FORGOT_PASSWORD: '/forgot_password',
  PROFILE: '/profile',
  BOOKLIST: '/booklist',
  BOOKDETAILS: '/book-details',
  SHOPPING_CART: '/shopping_cart'
}

export const Router = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={withAuthListener(HomeScreen)} />
    <Route path={ROUTES.BOOKLIST} component={BookListScreen} />
    <Route path={ROUTES.BOOKDETAILS} component={BookDetailsScreen} />
    <Route path={ROUTES.PROFILE} component={withAuthentication(ProfileScreen)} />
    <Route path={ROUTES.SIGN_IN} component={SignInScreen} />
    <Route path={ROUTES.SIGN_UP} component={SignUpScreen} />
    <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
  </Switch>
)

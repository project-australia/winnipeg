import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../../router'
import ContainerCentered from '../grid/ContainerCentered'

import './styles/Header.css'

const HeaderContainer = () => {
  return (
    <ContainerCentered className="App-header">
      <header>
        <h1 className="App-title">Welcome to React</h1>
        <Link to={ROUTES.HOME} > HOME</Link>
        <Link to={ROUTES.SIGN_IN} > SIGN IN</Link>
        <Link to={ROUTES.SIGN_UP}> SIGN UP</Link>
        <Link to={ROUTES.FORGOT_PASSWORD}> FORGOT PASSWORD</Link>
        <Link to={ROUTES.TEST}> TEST COMPONENT</Link>
      </header>
    </ContainerCentered>
  )
}

export const Header = HeaderContainer

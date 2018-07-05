import React from 'react'
import { Link } from 'react-router-dom'

const HeaderContainer = () => {
  return (
    <header className="App-header">
      <h1 className="App-title">Welcome to React</h1>
      <Link to='/' > Home</Link>
      <Link to='/home2' > Home</Link>
      <Link to='/sign_in' > Sign IN</Link>
      <Link to='/sign_up' > Sign UP</Link>
    </header>
  )
}

export const Header = HeaderContainer

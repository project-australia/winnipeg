import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { ROUTES } from '../../../router'
import ballardLogo from '../../../../assets/images/ballard-logo-horizontal.svg'

import './styles/Header.css'

export class Header extends Component {
  state = {
    isMobileMenuVisible: false
  }

  toggleMenuVisibility = () => (
    this.setState(({ isMobileMenuVisible }) => (
      { isMobileMenuVisible: !isMobileMenuVisible })
    )
  )

  renderMenu = () => {
    const menuToRender = this.props.isLoggedIn
      ? [
        {
          route: 'CART',
          child: <Icon className="cartIcon" name="cart" size="large" />
        },
        {
          route: 'PROFILE', // MISING ROUTE
          child: 'PROFILE'
        }
      ]
      : [
        {
          route: 'SIGN_IN',
          child: 'SIGN IN'
        },
        {
          route: 'SIGN_UP',
          child: 'SIGN UP'
        },
        {
          route: 'FORGOT_PASSWORD', // REMOVE IT
          child: 'FORGOT PASSWORD'
        },
        {
          route: 'TEST', // REMOVE IT
          child: 'TEST'
        }
      ]
    const generateMenuClass = this.state.isMobileMenuVisible ? 'stackable-menu active' : 'stackable-menu'
    return (
      <Menu.Menu className={generateMenuClass} position="right">
        {menuToRender.map(({ route, child }) => this.generateMenuItem(route, child))}
      </Menu.Menu>
    )
  }

  generateMenuItem = (route, child) => {
    return (
      <Menu.Item key={route} href={ROUTES[route]}>
        {child}
      </Menu.Item>
    )
  }

  render () {
    const [navBarClass, menuIconName] = this.state.isMobileMenuVisible
      ? ['navBar expanded', 'close']
      : ['navBar', 'bars']
    return (
      <Menu className={navBarClass} padded="true" fixed="top" stackable>
        <Menu.Header>
          <Link to={ROUTES.HOME}><img className="appLogo" src={ballardLogo} height={46} alt="logo" /></Link>
        </Menu.Header>
        {this.renderMenu()}
        <a className="mobileMenuIcon" onClick={this.toggleMenuVisibility}>
          <Icon name={menuIconName} size="large" />
        </a>
      </Menu>
    )
  }
}

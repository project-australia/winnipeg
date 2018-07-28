import React, { Component } from 'react'
import { bool } from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'semantic-ui-react'
import { ROUTES } from '../../../router'
import ballardLogo from '../../../../assets/images/ballard-logo-horizontal.svg'

import './styles/Header.css'

const LOGGED_IN_MENU_ITEMS = [
  {
    route: ROUTES.SHOPPING_CART,
    child: <Icon className="cartIcon" name="cart" size="large" />
  },
  {
    route: ROUTES.PROFILE,
    child: 'PROFILE'
  }
]

const LOGGED_OUT_MENU_ITEMS = [
  {
    route: ROUTES.SIGN_IN,
    child: 'SIGN IN'
  },
  {
    route: ROUTES.SIGN_UP,
    child: 'SIGN UP'
  }
]

export class Header extends Component {
  static propTypes = {
    isLoggedIn: bool
  }

  static defaultProps = {
    isLoggedIn: false
  }

  state = {
    isMobileMenuVisible: false
  }

  toggleMenuVisibility = () => (
    this.setState(({ isMobileMenuVisible }) => (
      { isMobileMenuVisible: !isMobileMenuVisible })
    )
  )

  renderMenu = () => {
    const menuToRender = this.props.isLoggedIn ? LOGGED_IN_MENU_ITEMS : LOGGED_OUT_MENU_ITEMS
    const generateMenuClass = this.state.isMobileMenuVisible ? 'stackable-menu active' : 'stackable-menu'
    return (
      <Menu.Menu className={generateMenuClass} position="right">
        {menuToRender.map(({ route, child }) => this.generateMenuItem(route, child))}
      </Menu.Menu>
    )
  }

  generateMenuItem = (route, child) => {
    return (
      <Menu.Item key={route} href={route}>
        {child}
      </Menu.Item>
    )
  }

  render () {
    const [navBarClass, menuIconName] = this.state.isMobileMenuVisible
      ? ['navBar expanded', 'close']
      : ['navBar', 'bars']
    return (
      <Menu className={navBarClass} padded="true" stackable>
        {/* TODO: Esse link nao ta funcionando */}
        <Menu.Header>
          <Link to={ROUTES.HOME}>
            <img className="appLogo" src={ballardLogo} height={46} alt="logo" />
          </Link>
        </Menu.Header>
        {this.renderMenu()}
        <a className="mobileMenuIcon" onClick={this.toggleMenuVisibility}>
          <Icon name={menuIconName} size="large" />
        </a>
      </Menu>
    )
  }
}

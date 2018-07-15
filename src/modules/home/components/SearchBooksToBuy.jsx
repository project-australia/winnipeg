import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

import { history } from '../../../config/historyRouter'
import { ROUTES } from '../../router'

import './styles/SearchBooksToBuy.css'

class SearchBooksToBuyContainer extends Component {
  state = {
    searchInput: ''
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })

  onKeyPressed = ({ keyCode }) => keyCode === 13 ? this.onSubmit() : null

  onSubmit = () => history.push({
    pathname: ROUTES.BOOKLIST,
    state: { searchParam: this.state.searchInput, type: 'BUY' }
  })

  render () {
    const { searchInput } = this.state
    return (
      <Input
        className="sbtb_input"
        fluid
        icon="search"
        iconPosition="left"
        name='searchInput'
        onChange={this.onChange}
        onKeyDown={this.onKeyPressed}
        placeholder="Search book"
        value={searchInput}
      />
    )
  }
}

export const SearchBooksToBuy = SearchBooksToBuyContainer

import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

import './styles/SearchBooksToBuy.css'

class SearchBooksToBuyContainer extends Component {
  state = {
    searchInput: ''
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })

  onKeyPressed = ({ keyCode }) => keyCode === 13 ? this.onSubmit() : null

  onSubmit = () => console.log('chama função de busca na API: ', this.state.searchInput)

  render () {
    const { searchInput } = this.state
    return (
      <div className='sbtb-wrapper'>
        <Input
          size='massive'
          icon='search'
          placeholder='Search...'
          value={searchInput}
          name='searchInput'
          onKeyDown={this.onKeyPressed}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Search</Button>
      </div>
    )
  }
}

export const SearchBooksToBuy = SearchBooksToBuyContainer

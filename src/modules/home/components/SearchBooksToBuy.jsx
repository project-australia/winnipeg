import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

import './styles/SearchBooksToBuy.css'

class SearchBooksToBuyContainer extends Component {
  state = {
    searchInput: ''
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })
  // onChange = event => {
  //   event.preventDefault()
  //   const { target } = event
  //   if (event.charCode !== undefined) {
  //     console.log('1')
  //   } else if (event.keyIdentifier !== undefined) {
  //     console.log('2')
  //   } else if (event.keyCode !== undefined) {
  //     console.log('3')
  //   }
  //   this.setState({ [target.name]: target.value })
  // }

  onSubmit = () => console.log('chama função de busca na API', this.state.searchInput)

  render () {
    const { searchInput } = this.state
    return (
      <div className='sbtb-wrapper'>
        <Input
          size='massive'
          icon='search'
          placeholder='Search...'
          onChange={this.onChange}
          value={searchInput}
          name='searchInput'
        />
        <Button onClick={this.onSubmit}>Search</Button>
      </div>
    )
  }
}

export const SearchBooksToBuy = SearchBooksToBuyContainer

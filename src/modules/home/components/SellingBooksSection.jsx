import React, { Component } from 'react'
import { Input, Button, List } from 'semantic-ui-react'

import './styles/SellingBooksSection.css'
import { ROUTES } from '../../router'
import { history } from '../../../config/historyRouter'

class SellingBooksSectionContainer extends Component {
  state = {
    isbn: ''
  }

  onChange = ({ target }) => this.setState({ [target.name]: target.value })

  onKeyPressed = ({ keyCode }) => keyCode === 13 ? this.onSubmit() : null

  onSubmit = () => history.push({
    pathname: ROUTES.BOOKDETAIL,
    state: { isbn: this.state.isbn }
  })

  render () {
    const { isbn } = this.state
    return (
      <div className='sbs-wrapper'>
        <div className='left'>
          <div>Sell Your Book</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis viverra tortor, in sollicitudin mauris. Vivamus condimentum malesuada pretium. Mauris feugiat lectus ac neque commodo, at aliquam felis ullamcorper.
          </div>
          <div>
            <Input
              size='large'
              icon='search'
              placeholder='Search...'
              value={isbn}
              name='isbn'
              onKeyDown={this.onKeyPressed}
              onChange={this.onChange}
            />
            <Button onClick={this.onSubmit}>Search</Button>
          </div>
        </div>
        <div className='left'>
          <div>Why to choose us ?</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis viverra tortor, consectetur adipiscing elit. Aliquam quis viverra tortor,
          </div>
          <div>
            <List>
              <List.Item>
                <List.Icon name='check circle outline' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Description as='a'>
                    Lorem ipsum dolor sit amet dolor sit amet'
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='check circle outline' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Description as='a'>
                    Lorem ipsum dolor sit amet dolor sit amet'
                  </List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Icon name='check circle outline' size='large' verticalAlign='middle' />
                <List.Content>
                  <List.Description as='a'>
                    Lorem ipsum dolor sit amet dolor sit amet'
                  </List.Description>
                </List.Content>
              </List.Item>
            </List>
          </div>
        </div>
      </div>
    )
  }
}

export const SellingBooksSection = SellingBooksSectionContainer

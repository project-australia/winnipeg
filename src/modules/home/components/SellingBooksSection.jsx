import React, { Component } from 'react'
import { Input, Button, List, Grid } from 'semantic-ui-react'

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
      <Grid centered columns={2}>
        <Grid.Row className="sbs-wrapper">
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h4>Sell Your Book</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis viverra tortor, in sollicitudin mauris. Vivamus condimentum malesuada pretium. Mauris feugiat lectus ac neque commodo, at aliquam felis ullamcorper.
            </p>
            <div className="sbs-search-row">
              <Input
                // size='large'
                placeholder='Book name or ISBN'
                value={isbn}
                name='isbn'
                onKeyDown={this.onKeyPressed}
                onChange={this.onChange}
              />
              <Button onClick={this.onSubmit}>Quote!</Button>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <h4>Why to choose us?</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis viverra tortor, consectetur adipiscing elit. Aliquam quis viverra tortor,
            </p>
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export const SellingBooksSection = SellingBooksSectionContainer

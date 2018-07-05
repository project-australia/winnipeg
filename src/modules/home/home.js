import React, { Component } from 'react'
import ContainerCentered from '../shared/components/grid/ContainerCentered'

import './styles/home.css'

class HomeC extends Component {
  render () {
    return (
      <ContainerCentered>
        <h1>There's no place like 127.0.0.1</h1>
      </ContainerCentered>
    )
  }
}

export const Home = HomeC

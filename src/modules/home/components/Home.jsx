import React, { Component } from 'react'

import ContainerCentered from '../../shared/components/grid/ContainerCentered'
import { SearchBooksToBuy } from './SearchBooksToBuy'
import { SellingBooksSection } from './SellingBooksSection'
import { BookListHome } from './BookListHome'

import './styles/Home.css'
class HomeContainer extends Component {
  render () {
    return (
      <ContainerCentered className='home-container-wrapper'>
        <SearchBooksToBuy />
        <SellingBooksSection />
        <BookListHome />
        <BookListHome />
      </ContainerCentered>
    )
  }
}

export const Home = HomeContainer

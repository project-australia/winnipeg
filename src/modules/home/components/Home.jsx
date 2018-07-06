import React, { Component } from 'react'

import ContainerCentered from '../../shared/components/grid/ContainerCentered'
import { SearchBooksToBuy } from './SearchBooksToBuy'
import { SellingBooksSection } from './SellingBooksSection'
import { BookListHome } from './BookListHome'

import { Books } from '../../../data/BooksList'

import './styles/Home.css'
class HomeContainer extends Component {
  render () {
    return (
      <ContainerCentered className='home-container-wrapper'>
        <SearchBooksToBuy />
        <SellingBooksSection />
        <BookListHome title={'Featured'} books={Books} />
        <BookListHome title={'Recently Added'} books={Books} />
      </ContainerCentered>
    )
  }
}

export const Home = HomeContainer

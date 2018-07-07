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
      <div>
        <ContainerCentered>
          <SearchBooksToBuy />
        </ContainerCentered>
        <ContainerCentered className='home-selling-section'>
          <SellingBooksSection />
        </ContainerCentered>
        <ContainerCentered className='home-container-wrapper'>
          <BookListHome title={'Featured'} books={Books} />
          <BookListHome title={'Recently Added'} books={Books} />
        </ContainerCentered>
      </div>
    )
  }
}

export const Home = HomeContainer

import React, { Component } from 'react'

import ContainerCentered from '../../shared/components/grid/ContainerCentered'
import { BookListHome } from './BookListHome'
import { Books } from '../../../data/BooksList'
import { SearchBooksToBuy } from './SearchBooksToBuy'
import { SellingBooksSection } from './SellingBooksSection'

import './styles/Home.css'
class HomeContainer extends Component {
  render () {
    return (
      <div className="home-wrapper">
        <SearchBooksToBuy />
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

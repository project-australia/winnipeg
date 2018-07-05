import React, { Component } from 'react'

import ContainerCentered from '../../shared/components/grid/ContainerCentered'
import { SearchBooksToBuy } from './SearchBooksToBuy'
import { SellingBooksSection } from './SellingBooksSection'
import { BookList } from './BookList'

class HomeContainer extends Component {
  render () {
    return (
      <ContainerCentered>
        <SearchBooksToBuy />
        <SellingBooksSection />
        <BookList />
        <BookList />
      </ContainerCentered>
    )
  }
}

export const Home = HomeContainer

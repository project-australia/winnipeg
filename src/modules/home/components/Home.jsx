import React, { Component } from "react";

import ContainerCentered from "../../shared/components/grid/ContainerCentered";
import ContainerPadded from "../../shared/components/grid/ContainerPadded";
import { BookListHome } from "./BookListHome";
import { Books } from "../../../data/BooksList";
import { SearchBooksToBuy } from "./SearchBooksToBuy";
import { SellingBooksSection } from "./SellingBooksSection";

import "./styles/Home.css";

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <SearchBooksToBuy />
        <ContainerCentered className="home-selling-section">
          <SellingBooksSection />
        </ContainerCentered>
        <ContainerPadded className="home-container-wrapper">
          <BookListHome title={"Featured"} books={Books} />
          <BookListHome title={"Recently Added"} books={Books} />
        </ContainerPadded>
      </div>
    );
  }
}

export const Home = HomeContainer;

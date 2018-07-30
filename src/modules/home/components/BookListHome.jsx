import React, { Component } from "react";
import { Link } from "react-router-dom";
import { string, arrayOf } from "prop-types";
import Slider from "react-slick";

import BookItem from "./BookItem";

import { ROUTES } from "../../router";
import { bookProptype } from "../propTypes/book.type";

import "./styles/BookListHome.css";
import "./styles/SlickOverride.css";

import { Values } from "../../../constants/values";

export class BookListHomeContainer extends Component {
  state = {
    screenWidth: window.innerWidth,
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateWindowDimensions);
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", true);
  };

  updateWindowDimensions = ({ currentTarget }) =>
    this.setState({ screenWidth: currentTarget.innerWidth });

  setSlidesCount = () => {
    const { screenWidth } = this.state;
    const { phoneLandscape, tablet } = Values.mediaQueries;
    if (screenWidth >= tablet) {
      return 4;
    }
    if (screenWidth >= phoneLandscape) {
      return 2;
    }
    return 1;
  };

  render() {
    const { title, books } = this.props;
    const slidesCount = this.setSlidesCount();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesCount,
      slidesToScroll: slidesCount,
    };
    return (
      <div className="blh-wrapper">
        <div className="blh-title-box">
          <span className="title">{title}</span>
          <span>
            <Link
              to={{
                pathname: ROUTES.BOOKLIST,
                state: { type: "ALL" },
              }}
            >
              View All
            </Link>
          </span>
        </div>
        {/* <div className='blh-book-list'> */}
        <Slider {...settings}>
          {books.map(book => <BookItem key={book.id} book={book} />)}
        </Slider>
        {/* </div> */}
      </div>
    );
  }
}

BookListHomeContainer.propTypes = {
  books: arrayOf(bookProptype).isRequired,
  title: string.isRequired,
};

export const BookListHome = BookListHomeContainer;

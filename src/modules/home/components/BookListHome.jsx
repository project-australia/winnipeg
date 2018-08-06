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

  updateWindowDimensions = ({ currentTarget }) =>
    this.setState({ screenWidth: currentTarget.innerWidth });

  render() {
    const { title, books } = this.props;
    const { phoneLandscape, tablet } = Values.mediaQueries;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: tablet,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: phoneLandscape,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
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
        <Slider {...settings}>
          {books.map(book => <BookItem key={book.id} book={book} />)}
        </Slider>
      </div>
    );
  }
}

BookListHomeContainer.propTypes = {
  books: arrayOf(bookProptype).isRequired,
  title: string.isRequired,
};

export const BookListHome = BookListHomeContainer;

import React from "react";
import { Button, Image } from "semantic-ui-react";

import { bookProptype } from "../propTypes/book.type";
import { ROUTES } from "../../router";
import { history } from "../../../config/historyRouter";

import "./styles/BookItem.css";

const navigateToBookDetail = (book, type) =>
  history.push({
    pathname: ROUTES.BOOKDETAILS,
    state: { book, type },
  });

const BookItem = ({ book }) => {
  return (
    <div className="bi-wrapper">
      <Image src={book.images.medium} />
      <div>
        <div className="bi-title">{book.title}</div>
        <div className="bi-description">{book.authors.join(", ")}</div>
        <div className="bi-description">Edition: {book.edition}</div>
        <div>
          <Button onClick={() => navigateToBookDetail(book, "BUY")}>
            <p>Buy</p>
            <p>${book.prices.buy}</p>
          </Button>
          <Button onClick={() => navigateToBookDetail(book, "RENT")}>
            <p>Rent</p>
            <p>${book.prices.rent}</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  book: bookProptype.isRequired,
};

export default BookItem;

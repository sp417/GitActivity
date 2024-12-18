import React from "react";
import BookList from "../components/BookList";
import AddBook from "../components/AddBook";

function Books() {
  return (
    <div className="books-page">
      <BookList />
      <AddBook />
    </div>
  );
}

export default Books;

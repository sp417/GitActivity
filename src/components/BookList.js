import React, { useEffect, useState } from "react";
import axios from "../api/api";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/books")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="book-list">
      <h2>Books List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - {book.available ? "Available" : "Issued"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;

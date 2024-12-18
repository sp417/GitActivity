import React, { useState } from "react";
import axios from "../api/api";

function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/books", { title, author, available: true })
      .then(() => {
        alert("Book added successfully!");
        setTitle("");
        setAuthor("");
      })
      .catch((error) => console.error("Error adding book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Book</h2>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Author:</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default AddBook;

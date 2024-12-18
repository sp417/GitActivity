import React, { useState } from "react";
import axios from "../api/api";

function UpdateBook() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/books/${id}`, { title, author })
      .then(() => alert("Book updated successfully!"))
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Book</h2>
      <label>Book ID:</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>Author:</label>
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Update Book</button>
    </form>
  );
}

export default UpdateBook;

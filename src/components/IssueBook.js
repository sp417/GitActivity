import React, { useState } from "react";
import axios from "../api/api";

function IssueBook() {
  const [userId, setUserId] = useState("");
  const [bookId, setBookId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/transactions/issue", { userId, bookId })
      .then(() => alert("Book issued successfully!"))
      .catch((error) => console.error("Error issuing book:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Issue Book</h2>
      <label>User ID:</label>
      <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      <label>Book ID:</label>
      <input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} required />
      <button type="submit">Issue Book</button>
    </form>
  );
}

export default IssueBook;

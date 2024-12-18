import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Library Management</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

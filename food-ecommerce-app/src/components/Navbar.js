import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🍔 FoodZone</h2>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;

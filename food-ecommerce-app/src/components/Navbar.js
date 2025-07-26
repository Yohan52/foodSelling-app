import React from "react";
import "./Navbar.css";

function Navbar() {
    return(
        <nav calssName="navbar">
            <h2>foodZone</h2>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>Cart</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
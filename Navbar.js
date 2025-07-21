import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>FoodieMart</h1>
            <div calssName="nav-links">
                <button className="blur-button">home</button>
                <button className="blur-button">product</button>
                <button className="blur-button">Cart</button>
            </div>
        </nav>
    );
};

export default Navbar;
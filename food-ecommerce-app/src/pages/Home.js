import React, { useState } from "react";
import { motoin } from "framer-motion";
import { Fabars, FaHome, FaHamburger, FaShoppingCart, FaPhone } from "react-icon/fa";
import "./Home.css";

const sampleProducts = [
    { name: "Burger", description: "We have more variations like this Burger.", image: "./assets/burger.jpg" },
    { name: "pizza", description: "We have more variations like this Burger.", image: "./assets/pizza.jpg" },
    { name: "Sushi", description: "We have more variations like this Sushi. ", image: "./assets/sushi.jpg" },
];

function Home () {
    const [ showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu (prev => !prev);

    return (
        <div className="home-page">
            {/* Top Navigation*/}
            <header cassName="navbar">
                <div className="logo">FoodZone</div>
                <FaBars className="menu-icon" onClick={toggleMenu} />
                <div className="nav-icons">
                    <FaHome title="Home" />
                    <FaHamburger title="Burgers" />
                    <FaShoppingCart title="Cart"  />
                    <FaPhone title="Contact" />
                </div>
            </header>

            {/* side Menu */}
            <motoin.div 
                className="side-menu"
                initial={{x: -300}}
                animate={{x: showMenu ? 0: -300}}
                transsition={{ during: 0.4}}
            >
                {["Pasta", "Chicken Nuggets", "Taco", "Hotdog", "Pizza", "Sushi", "Burger", "Fries"].map((item, index) => (
                <motoin.div
                    key={index}
                    className="menu-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300}}
                >
                    {item}
                </motoin.div>
                ))}
            </motoin.div>

            {/*Trending Section*/}
            
        </div>
    )
}
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
        
    )
}
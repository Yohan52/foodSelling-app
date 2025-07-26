import React from "react";
import ProductCard from "../components/ProductCard";
import "./home.css";

const sampleProduct = [
    { name: "Burger", price: 500, image: "/assets/burger.jpg" },
    { name: "Pizza", price: 1200, image: "/assets/pizza.jpg" },
    { name: "Sushi", price: 1500, image: "assets/sushi.jpg" },
];

function Home() {
    return (
        <div className="home">
            <h1>delicious Food</h1>
            <div className="products-grid">
                {sampleProducts.map((item, idx) => (
                    <Productcard key={idx} {...item} />
                ))}
            </div>
        </div>
    );
}
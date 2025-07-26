import React from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const sampleProducts = [
  { name: "burger", price: 500, image: "/assets/burger.jpg" },
  { name: "pizza", price: 1200, image: "/assets/pizza.jpg" },
  { name: "sushi", price: 1500, image: "/assets/sushi.jpg" },
];

function Home() {
  return (
    <div className="home">
      <h1>Delicious Foods</h1>
      <div className="products-grid">
        {sampleProducts.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
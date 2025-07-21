import React from 'react';

const ProductCard =({name , price , image}) => {
    return (
        <div className="product-card">
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <p>{price}</p>
            <button calssName="blur-button">Add to cart</button>
        </div>
    );
};

export default ProductCard;
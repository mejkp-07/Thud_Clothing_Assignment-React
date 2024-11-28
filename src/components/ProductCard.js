import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.ImageURL || "https://via.placeholder.com/150"}
                alt={product.ProductName}
            />
            <h3>{product.ProductName}</h3>
            <p>Category: {product.Category}</p>
            <p>Price: ₹{product.Price}</p>
        </div>
    );
};

export default ProductCard;

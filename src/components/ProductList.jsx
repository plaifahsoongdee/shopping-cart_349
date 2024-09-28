// src/components/ProductList.jsx
import React from "react";
import ProductItem from "./ProductItem";
import { products } from "../data/data";

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2 className="haikyuushop">Haikyuu Figures Shop</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

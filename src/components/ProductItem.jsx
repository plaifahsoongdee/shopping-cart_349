import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.name} width="200" />
      <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: "600", color: "#333" }}>
        {product.name}
      </h3>
      <p>ราคา: {product.price} บาท</p>
      <button className="addToCartbutton" onClick={() => addToCart(product)}>เพิ่มลงในตะกร้า</button>
    </div>
  );
};

export default ProductItem;

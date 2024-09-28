import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  return (
    <div className="app">
      <div className="product-list">
        <ProductList addToCart={addToCart} />
      </div>
      {cartItems.length > 0 && (  // แสดง Cart เฉพาะเมื่อมีสินค้า
        <div className="cart">
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        </div>
      )}
    </div>
  );
};

export default App;

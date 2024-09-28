// // src/components/Cart.jsx
// import React from "react";

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>ตะกร้าสินค้า</h2>
//       {cartItems.length === 0 ? <p>ยังไม่มีสินค้าในตะกร้า</p> : null}
//       {cartItems.map((item) => (
//         <div key={item.id} className="cart-item">
//           <h3>{item.name}</h3>
//           <p>ราคา: {item.price} บาท</p>
//           <input
//             type="number"
//             value={item.quantity}
//             min="1"
//             onChange={(e) => updateQuantity(item.id, e.target.value)}
//           />
//           <button onClick={() => removeFromCart(item.id)}>ลบสินค้า</button>
//         </div>
//       ))}
//       <h3>ราคารวม: {total} บาท</h3>
//     </div>
//   );
// };

// export default Cart;

// src/components/Cart.jsx
// import React from 'react';

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>ตะกร้าสินค้า</h2>
//       {cartItems.map((item) => (
//         <div className="cart-item" key={item.id}>
//           <img src={item.image} alt={item.name} />
//           <div className="cart-item-info">
//             <div className="cart-item-name">{item.name}</div>
//             <div className="cart-item-quantity">
//               <input
//                 type="number"
//                 value={item.quantity}
//                 min="1"
//                 onChange={(e) => updateQuantity(item.id, e.target.value)}
//               />
//             </div>
//           </div>
//           <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
//             ลบ
//           </button>
//         </div>
//       ))}
//       <div className="cart-total">รวม: {total.toFixed(2)} บาท</div>
//       <button className="cart-checkout">สั่งซื้อ</button>
//     </div>
//   );
// };

// export default Cart;
// src/components/Cart.jsx

// import React from 'react';

// const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {

  
//   const handleDecrease = (id, quantity) => {
//     if (quantity > 1) {
//       updateQuantity(id, quantity - 1);
//     }
//   };

//   const handleIncrease = (id, quantity) => {
//     updateQuantity(id, quantity + 1);
//   };

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>ตะกร้าสินค้า</h2>
//       {cartItems.map((item) => (
//         <div className="cart-item" key={item.id}>
//           <div className="cart-item-info">
//             <img src={item.image} alt={item.name} className="cart-item-image" />
//             <div className="cart-item-name">{item.name}</div>
//             <div className="cart-item-quantity">
//               <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
//               <span>{item.quantity}</span>
//               <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
//             </div>
//           </div>
//           <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
//             ลบ
//           </button>
//         </div>
//       ))}
//       <div className="cart-total">รวม: {total.toFixed(2)} บาท</div>
//       <button className="cart-checkout">สั่งซื้อ</button>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from 'react';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const shippingCost = 100;

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, quantity - 1);
    }
  };

  const handleIncrease = (id, quantity) => {
    updateQuantity(id, quantity + 1);
  };

  const handleApplyCoupon = () => {
    // ตัวอย่างการตรวจสอบคูปองและตั้งค่าส่วนลด
    if (coupon === 'HAIKYUU10') {
      setDiscount(10); // ส่วนลด 10 บาท
    } else {
      setDiscount(0); // ไม่มีส่วนลด
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalWithDiscount = total - discount + shippingCost;

  return (
    <div className="cart">
      <h2 className="cart-title">ตะกร้าสินค้าของคุณ</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <div className="cart-item-info">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-name">{item.name}</div>
            <div className="cart-item-quantity">
              <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
            </div>
          </div>
          <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
            ลบ
          </button>
        </div>
      ))}
      
      <div className="cart-total">รวม: {total.toFixed(2)} บาท</div>
      <div className="cart-shipping">ค่าจัดส่ง: {shippingCost} บาท</div>
      <div className="cart-discount">ส่วนลด: {discount} บาท</div>
      <input className='discount'
        type="text"
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        placeholder="กรอกรหัสคูปองส่วนลด"
      />
      <button onClick={handleApplyCoupon} className='discount-button'>ตกลง</button>
      <div className="cart-total-with-discount">ยอดชำระเงินทั้งหมด: {totalWithDiscount.toFixed(2)} บาท</div>
      <button className="cart-checkout">ชำระเงิน</button>
    </div>
  );
};

export default Cart;

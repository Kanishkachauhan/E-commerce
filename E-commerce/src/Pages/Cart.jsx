import React from "react";
import { useCart } from "./cartContext";
import './Cart.css'

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem, totalAmount } = useCart();

  return (
   <div className="cart-container">
  <h2 className="cart-title">🛒 Your Cart</h2>

  {cart.length === 0 && <p className="empty">Your cart is empty</p>}

  {cart.map((item) => (
    <div className="cart-card" key={item.id}>
      <img src={item.image} alt={item.title} />

      <div className="cart-info">
        <h4>{item.title}</h4>
        <p>${item.price}</p>

        <div className="qty">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  ))}

  <h3 className="total">Total: ${totalAmount}</h3>
</div>
  );
}

export default Cart;
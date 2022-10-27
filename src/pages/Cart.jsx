import React, { useContext } from "react";
import StockContext from "../StockContext";
import "./Cart.css";

function Cart() {
  const { shopStock } = useContext(StockContext);

  const items = shopStock.map((item) => {
    if (item.quantity > 0) {
      return (
        <div className="checkout-item">
          <h3>
            {item.name} x {item.quantity}
          </h3>
          <h3>CAD ${item.price * item.quantity}</h3>
        </div>
      );
    }
  });

  const total = shopStock.reduce((prevNum, curNum) => {
    return prevNum + curNum.quantity * curNum.price;
  }, 0);

  return (
    <main className="cart-page">
      <h1 className="title">Cart</h1>
      {items}
      <h3 className="total">Total: CAD ${total}</h3>
      <button>PURCHASE</button>
    </main>
  );
}

export default Cart;

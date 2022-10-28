import React, { useContext } from "react";
import { useNavigate } from "react-router";
import StockContext from "../StockContext";
import "./Cart.css";

function Cart() {
  const { shopStock, setShopStock } = useContext(StockContext);
  let navigate = useNavigate();

  const items = shopStock.map((item) => {
    if (item.quantity > 0) {
      return (
        <div className="cart-item">
          <h3>
            {item.name} x {item.quantity}
          </h3>
          <h3>CAD ${item.price * item.quantity}</h3>
          <button
            className="remove-button"
            id={item.id}
            onClick={(e) => removeItem(e)}
          >
            remove item
          </button>
        </div>
      );
    }
  });

  const total = shopStock.reduce((prevNum, curNum) => {
    return prevNum + curNum.quantity * curNum.price;
  }, 0);

  function removeItem(e) {
    let { id } = e.target;
    setShopStock(
      shopStock.map((item) => {
        if (id == item.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <main className="cart-page">
      <h1 className="title">Cart</h1>
      <div className="cart-items">{items}</div>
      <h3 className="total">Total: CAD ${total}</h3>
      <div className="cart-button-group">
        <button className="purchase-button">PURCHASE</button>
        <button onClick={() => navigate("/shop")}>RESUME SHOPPING</button>
      </div>
    </main>
  );
}

export default Cart;

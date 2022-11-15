import React, { useContext } from "react";
import { useNavigate } from "react-router";
import "./ItemPage.css";
import StockContext from "../../StockContext";

function ItemPage(props) {
  let navigate = useNavigate();
  const { shopStock, setShopStock } = useContext(StockContext);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setCurrentItem({});
  }

  function handleSubmit(id) {
    console.log(id);
    setShopStock(
      shopStock.map((item) => {
        if (id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function checkout() {
    navigate("/cart");
  }
  return (
    <div className="item-page">
      <h2 className="item-name">{props.name}</h2>
      <img className="item-image" src={props.imageSource} alt="" />
      <p>{props.description}</p>
      <h3>CAD ${props.price}</h3>
      <div className="button-group">
        <button onClick={() => handleSubmit(props.id)}>ADD TO CART</button>
        <button onClick={checkout}>CHECKOUT</button>
      </div>
      <button className="back-button-mobile" onClick={handleClick}>
        {"<"}
      </button>
      <button className="back-button-desktop" onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default ItemPage;

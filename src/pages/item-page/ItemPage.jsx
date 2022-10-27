import React from "react";
import "./ItemPage.css";

function ItemPage(props) {
  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setCurrentItem({});
  }

  function handleSubmit(id) {
    console.log(id);
    props.setShopStock(
      props.shopStock.map((item) => {
        if (id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="item-page">
      <h2 className="item-name">{props.name}</h2>
      <img className="item-image" src={props.imageSource} alt="" />
      <p>{props.description}</p>
      <h3>CAD ${props.price}</h3>
      <div className="button-group">
        <button onClick={() => handleSubmit(props.id)}>ADD TO CART</button>
        <button>CHECKOUT</button>
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

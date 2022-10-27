import React from "react";
import "./ItemPage.css";

function ItemPage(props) {
  function handleClick() {
    props.setCurrentItem({});
  }
  return (
    <div className="item-page">
      <h2 className="item-name">{props.name}</h2>
      <img className="test-image" src={props.imageSource} alt="" />
      <p>{props.description}</p>
      <h3>{props.price}</h3>
      <div className="button-group">
        <button>ADD TO CART</button>
        <button>CHECKOUT</button>
      </div>
      <button className="back-button" onClick={handleClick}>
        {"<"}
      </button>
    </div>
  );
}

export default ItemPage;

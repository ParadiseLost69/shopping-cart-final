import React from "react";
import "./ItemPage.css";

function ItemPage(props) {
  function handleClick() {
    props.setCurrentItem({});
  }
  return (
    <div>
      <h1>items</h1>
      <h3>{props.name}</h3>
      <img className="test-image" src={props.imageSource} alt="" />
      <h3>{props.price}</h3>
      <button onClick={handleClick}>BACK</button>
    </div>
  );
}

export default ItemPage;

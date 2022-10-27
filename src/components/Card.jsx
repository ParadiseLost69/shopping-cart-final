import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card" id={props.id}>
      <img
        onClick={(e) => props.selectItem(e)}
        id={props.id}
        className="card-image"
        src={props.src}
        alt={props.description}
      />
      <h2>{props.name}</h2>

      <h3>CAD ${props.price}</h3>
      <hr />
    </div>
  );
}

export default Card;

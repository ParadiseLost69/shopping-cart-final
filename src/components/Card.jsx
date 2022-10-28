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
        loading="lazy"
      />

      <h2 className="card-name">{props.name}</h2>
      <h3 className="card-price">CAD ${props.price}</h3>
      <button id={props.id} onClick={(e) => props.selectItem(e)}>
        SEE MORE
      </button>
      <hr />
    </div>
  );
}

export default Card;

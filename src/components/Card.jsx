import React from "react";
import "./Card.css";
import Picture from "../images/dresser.jpeg";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src={Picture}
        alt="Dresser with white white handles"
      />
      <h2>Wooden Antique Dresser</h2>

      <h3>CAD $100</h3>
      <hr />
    </div>
  );
}

export default Card;

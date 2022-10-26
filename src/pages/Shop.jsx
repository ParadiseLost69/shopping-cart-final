import React from "react";
import Card from "../components/Card";
import "./Shop.css";

function Shop() {
  return (
    <main className="shop-page">
      <h1 className="title">Restorations</h1>
      <div className="shop">
        <Card />
        <Card />
      </div>
    </main>
  );
}

export default Shop;

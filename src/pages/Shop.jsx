import React from "react";
import Card from "../components/Card";
import "./Shop.css";

function Shop(props) {
  const inventory = props.shopStock.map((item) => {
    return (
      <Card
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        src={item.imageSource}
      />
    );
  });

  return (
    <main className="shop-page">
      <h1 className="title">Restorations</h1>
      <div className="shop">{inventory}</div>
    </main>
  );
}

export default Shop;

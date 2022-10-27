import React, { useState } from "react";
import Card from "../components/Card";
import "./Shop.css";
import ItemPage from "./item-page/ItemPage";

function Shop(props) {
  const [currentItem, setCurrentItem] = useState({});

  function selectItem(e) {
    const { id } = e.target;
    props.shopStock.map((item) => {
      if (item.id == id) {
        setCurrentItem(item);
      }
    });
  }
  const inventory = props.shopStock.map((item) => {
    return (
      <Card
        selectItem={selectItem}
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        src={item.imageSource}
      />
    );
  });

  return (
    <main className="shop-page">
      {Object.keys(currentItem).length === 0 ? (
        <div>
          <h1 className="title">Restorations</h1>
          <div className="shop">{inventory}</div>
        </div>
      ) : (
        <ItemPage
          name={currentItem.name}
          id={currentItem.id}
          price={currentItem.price}
          description={currentItem.description}
          imageSource={currentItem.imageSource}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />
      )}
    </main>
  );
}

export default Shop;

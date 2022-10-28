import React, { useState, useContext } from "react";
import Card from "../components/Card";
import "./Shop.css";
import ItemPage from "./item-page/ItemPage";
import StockContext from "../StockContext";

function Shop({ currentItem, setCurrentItem }) {
  const { shopStock, setShopStock } = useContext(StockContext);

  //Sets current item to render correct item page
  function selectItem(e) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const { id } = e.target;
    shopStock.map((item) => {
      if (item.id === Number(id)) {
        setCurrentItem(item);
      }
    });
  }

  //
  const inventory = shopStock.map((item) => {
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

import React, { useContext } from "react";
import Card from "../components/Card";
import "./Shop.css";
import ItemPage from "./item-page/ItemPage";
import StockContext from "../StockContext";

function Shop({ currentItem, setCurrentItem }) {
  // eslint-disable-next-line
  const { shopStock, setShopStock } = useContext(StockContext);

  //Sets current item to render correct item page
  function selectItem(e) {
    window.scrollTo(0, 0);
    const { id } = e.target;
    // eslint-disable-next-line
    shopStock.map((item) => {
      if (item.id === Number(id)) {
        setCurrentItem(item);
      }
    });
  }

  // eslint-disable-next-line
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

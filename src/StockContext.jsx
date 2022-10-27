import { createContext, useState } from "react";
import shopInventory from "./data/shopInventory";

const StockContext = createContext();

export function StockProvider({ children }) {
  const [shopStock, setShopStock] = useState(shopInventory);

  function addToCart(id) {
    setShopStock(
      shopStock.map((item) => {
        if (id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <StockContext.Provider value={{ shopStock, setShopStock, addToCart }}>
      {children}
    </StockContext.Provider>
  );
}

export default StockContext;

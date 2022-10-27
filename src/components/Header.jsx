import React, { useContext } from "react";
import StockContext from "../StockContext";
import "./Header.css";

function Header() {
  const { shopStock } = useContext(StockContext);

  const totalItems = shopStock.reduce((prevItem, curItem) => {
    return prevItem + curItem.quantity;
  }, 0);

  return (
    <nav>
      <ul className="navbar">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/shop">SHOP</a>
        </li>
        <li>
          <a href="/cart">CART ({totalItems ? totalItems : "-"})</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

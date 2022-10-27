import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP </Link>
        </li>
        <li>
          <Link to="/cart">CART ({totalItems ? totalItems : "-"})</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

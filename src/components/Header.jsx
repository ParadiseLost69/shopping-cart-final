import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import StockContext from "../StockContext";
import "./Header.css";

function Header({ currentItem, setCurrentItem }) {
  const { shopStock } = useContext(StockContext);
  let location = useLocation();

  function handleClick() {
    setCurrentItem({});
  }

  const totalItems = shopStock.reduce((prevItem, curItem) => {
    return prevItem + curItem.quantity;
  }, 0);

  const fontColorChange =
    location.pathname === "/"
      ? { color: "white" }
      : { color: "var(--main-color)" };

  return (
    <nav
      style={
        location.pathname === "/"
          ? { backgroundColor: "transparent", position: "absolute", right: 0 }
          : { backgroundColor: "transparent" }
      }
    >
      <ul className="navbar">
        <li>
          <Link style={fontColorChange} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/shop" onClick={handleClick} style={fontColorChange}>
            SHOP{" "}
          </Link>
        </li>
        <li>
          <Link to="/cart" style={fontColorChange}>
            CART ({totalItems ? totalItems : "-"})
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

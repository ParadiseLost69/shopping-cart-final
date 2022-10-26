import React from "react";
import "./Header.css";

function Header() {
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
          <a href="/cart">CART (-)</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

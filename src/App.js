import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import shopInventory from "./data/shopInventory";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [shopStock, setShopStock] = useState(shopInventory);

  return (
    <BrowserRouter>
      <Header shopStock={shopStock} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop shopStock={shopStock} setShopStock={setShopStock} />}
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

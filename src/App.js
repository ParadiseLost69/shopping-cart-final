import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { StockProvider } from "./StockContext";

function App() {
  const [currentItem, setCurrentItem] = useState({});
  return (
    <StockProvider>
      <BrowserRouter>
        <Header currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop currentItem={currentItem} setCurrentItem={setCurrentItem} />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </StockProvider>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <main>
      <h1>Welcome to Sunday Archive</h1>
      <button onClick={handleClick}>Embark</button>
    </main>
  );
}

export default Home;

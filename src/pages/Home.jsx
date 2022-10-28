import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Home() {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <main className="homepage">
      <h3>Built for you</h3>
      <div className="main-title">
        <h1>Sunday</h1>
        <h1>Archive</h1>
      </div>
      <div className="button-section">
        <button onClick={handleClick}>ENTER</button>
      </div>
      <div className="social-icons">
        <BsFacebook size={30} color={"#583600"} />
        <BsInstagram size={30} color={"#583600"} />
        <BsTwitter size={30} color={"#583600"} />
      </div>
    </main>
  );
}

export default Home;

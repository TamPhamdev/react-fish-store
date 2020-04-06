import React, { useState } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
function App() {
  const [fish, setFish] = useState([]);
  const addFish = (fish) => {
    console.log("fish from app :", fish);
    setFish(fish);
  };
  return (
    <div className="catch-of-the-day">
      <div className="menu">
        <Header tagLine="Fresh seafood market" />
      </div>
      <Order />
      <Inventory addFish={addFish} />
    </div>
  );
}
export default App;

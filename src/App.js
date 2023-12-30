import React, { useState } from "react";
import Bookstore from "./components/Bookstore";
import Header from "./components/Header";

export default function App() {
  let [morebooks, setMorebooks] = useState([]);

  return (
    <div>
      <Header setMorebooks={setMorebooks} />
      <Bookstore morebooks={morebooks} />
    </div>
  );
}

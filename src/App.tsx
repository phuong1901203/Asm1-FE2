import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ListCart, ProductsList } from "./components";

function App() {
  return (
    <>
      <ProductsList />
      <ListCart />
    </>
  );
}

export default App;

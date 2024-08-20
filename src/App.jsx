import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./Components/Hero/hero";
import EcoSystemWorking from "./Pages/EcoSystemWorks/EcoSystemWorks";
import Product from "./Pages/Products/Products";
import Features from "./Pages/Features/Features";

function App() {

  return <>
     <Hero/>
     <EcoSystemWorking/>
     <Product/>
     <Features/>
  </>;
}

export default App;

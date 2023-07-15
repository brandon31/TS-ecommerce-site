// import { useState } from "react";
import "./App.css";
// import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Product from "./pages/Product";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
        <Route path="/products" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;

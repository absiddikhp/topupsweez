import React from "react";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { Router, Route } from "react-router-dom";
import Popup from "./components/Popup";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/" element={<Popup />} />
      </Router>
      <Footer />
    </>
  );
};

export default App;

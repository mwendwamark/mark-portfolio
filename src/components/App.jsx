import React from "react";
import Home from "./Home";
// import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-dom";
import "./App.css";

function App() {
  return (
    <>
      <Home />
      {/* <Navbar /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Projects />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;

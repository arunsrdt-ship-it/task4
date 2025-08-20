import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import './MediaQuery.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table";
import Home from "./pages/Home";
import Table2 from "./components/Table2"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/table" element={<Table />} />
      <Route path="/table2" element={<Table2 />} />
    </Routes>
  );
}

export default App;

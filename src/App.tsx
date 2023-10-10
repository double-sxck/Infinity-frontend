import React from "react";
// import { Header, MainText, TextField } from "./components/index";
import { Header } from "./components/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div>메인</div>} />
        <Route path="/about" element={<div>sexy</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

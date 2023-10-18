import React from "react";
import { Main, MainWrite, CheckNovel } from "./components/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<MainWrite />} />
        <Route path="/novel/:Id" element={<CheckNovel />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

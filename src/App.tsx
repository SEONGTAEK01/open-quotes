import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Philosophy from "./components/Philosophy";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/philosophy" element={<Philosophy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

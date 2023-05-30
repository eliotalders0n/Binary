import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// User Interface
import Board from "./components/control";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

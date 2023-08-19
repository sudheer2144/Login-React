import React from "react";
import { Routes, Route } from "react-router-dom"
import Login from "./Components/Login"
import Profile from "./Components/Profile";
import "./Styles/style.css"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;

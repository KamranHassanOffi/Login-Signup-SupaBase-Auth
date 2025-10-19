
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} /> {/* 👈 signup shows first */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

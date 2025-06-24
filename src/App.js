
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", background: "#0e0e0e", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>xcvideo.ai</h1>
      <nav style={{ textAlign: "center", marginBottom: "20px" }}>
        <Link to="/login" style={{ marginRight: "10px", color: "#00e0ff" }}>Login</Link>
        <Link to="/signup" style={{ color: "#00e0ff" }}>Signup</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

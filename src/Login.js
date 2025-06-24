
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    alert("Frontend login is for display — use backend for now.");
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Login</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit" style={{ marginTop: "10px" }}>Login</button>
    </form>
  );
}

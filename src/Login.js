
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://xcvideo-backendd-1.onrender.com/login", {
        email,
        password,
      }, { withCredentials: true });
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Log In</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit" style={{ marginTop: "10px" }}>Log In</button>
    </form>
  );
}
 

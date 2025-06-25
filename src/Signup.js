import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://xcvideo-backendd-1.onrender.com/signup",
        { email, password },
        { withCredentials: true }
      );
      alert("Signup successful. Redirecting to login.");
      window.location.href = "/login";
    } catch (err) {
      console.error(err.response || err);
      alert("Signup failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" required
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" required
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit" style={{ marginTop: "10px" }}>Sign Up</button>
    </form>
  );
}


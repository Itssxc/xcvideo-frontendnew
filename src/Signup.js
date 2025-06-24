
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://xcvideo-backendd-1.onrender.com/signup",
        { email, password },
        { withCredentials: true }
      );

      if (res.status === 200) {
        alert("Signup successful. Redirecting to login.");
        window.location.href = "/login";
      } else {
        alert("Signup failed: " + (res.data?.error || "unknown issue"));
      }
    } catch (err) {
      alert("Signup failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <form onSubmit={handleSignup} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Sign Up</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" style={{ marginTop: "10px" }}>Sign Up</button>
    </form>
  );
}


import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Home from "../Home/Home";

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Welcome! Sign up below!</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          type="text"
          placeholder="Username"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      {/* <Link to="/Home">
        <button>Sign Up!</button>
      </Link> */}
    </div>
  );
}

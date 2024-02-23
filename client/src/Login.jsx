import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    const data = { email, password };
    const res = await axios.post("http://localhost:8000/api/auth/login", data);
    if (res.status === 200) {
      //Store token on web browser
      localStorage.setItem("auth_data", JSON.stringify(res.data));
      navigate("/get-all");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Login</h1>
        <input
          type="email"
          placeholder="email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-form"
        />
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-form"
        />
        <button onClick={handleClick} className="auth-button">
          Login
        </button>
        <div className="link-to">
          <p>Are you new to this platform?</p>
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

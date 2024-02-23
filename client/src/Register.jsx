import { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle Click
  const handleClick = async () => {
    const data = { name, email, password };
    const res = await axios.post(
      "http://localhost:8000/api/auth/register",
      data
    );
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Register</h1>
        <input
          type="text"
          name="username"
          placeholder="username..."
          className="input-form"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="email..."
          className="input-form"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password..."
          className="input-form"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleClick}>
          Register
        </button>
        <div className="">
          <div className="link-to">
            <p>Already have an account?</p>
            <Link to="/" className="link">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

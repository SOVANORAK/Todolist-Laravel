import { useState, useEffect } from "react";
import axios from "axios";
import "./Add.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const getAuthData = () => {
    const auth_data = JSON.parse(localStorage.getItem("auth_data"));
    setToken(auth_data.token);
  };

  useEffect(() => {
    getAuthData();
  }, []);

  const handleAdd = async () => {
    const data = { title, body };

    const res = await axios.post("http://localhost:8000/api/todo", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (res.status === 201) {
      alert("Add Todo successfully.");
      navigate("/get-all");
    } else {
      alert("Can not add todo!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="add-title">Add Todo</h2>
        <input
          placeholder="todo..."
          className="input-form"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="noted..."
          className="input-form"
          onChange={(e) => setBody(e.target.value)}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;

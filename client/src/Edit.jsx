import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = () => {
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

  const location = useLocation();
  const pathName = location.pathname;
  const id = pathName.split("/")[2];

  const handleEdit = async (id) => {
    try {
      const data = { title, body };
      const res = await axios.put(
        "http://localhost:8000/api/todo/" + id,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      if (res.status === 200) {
        navigate("/get-all");
      }
    } catch {}
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="add-title">Edit Todo</h2>
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
        <button className="add-button" onClick={() => handleEdit(id)}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Edit;

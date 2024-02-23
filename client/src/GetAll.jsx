import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AllTodoList from "./AllTodoList.jsx";
import "./Todolist.css";
import Login from "./Login.jsx";

const GetAll = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  //Log out
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const getAuthData = () => {
    const auth_data = JSON.parse(localStorage.getItem("auth_data"));
    setToken(auth_data.token);
    setUser(auth_data.user);
  };

  useEffect(() => {
    getAuthData();
  }, []);

  return token ? (
    <div className="get-all-container">
      <button onClick={logout} className="logout-button">
        Logout
      </button>

      <Link to="/add">
        <button className="add-button">Add</button>
      </Link>

      <h4>Welcome: {user?.name}</h4>
      <h4>Email: {user?.email}</h4>

      <AllTodoList token={token} />
    </div>
  ) : (
    <Login />
  );
};

export default GetAll;

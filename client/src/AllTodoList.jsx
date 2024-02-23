import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Todolist.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AllTodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);

  const getAll = async () => {
    const res = await axios.get("http://localhost:8000/api/todo", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token, //after Bearer need a space
      },
    });
    if (res.status === 200) {
      setTodos(res.data);
    }
  };

  //Fetch data from api
  useEffect(() => {
    getAll();
  });

  //Delete Todo
  const deleteTodo = async (id) => {
    const res = await axios.delete("http://localhost:8000/api/todo/" + id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });
    if (res.status === 200) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  //Make it done
  const makeItDone = async (id) => {
    const res = await axios.put(
      "http://localhost:8000/api/todo/" + id,
      { doned: 1 },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (res.status === 200) {
      //if it is success list all todo back
      getAll();
    }
  };

  return (
    <div className="todo-container">
      {todos.map((todo) => (
        <div className="todo" key={todo.id}>
          <h3>Todo: {todo.title} </h3>
          <h5>Noted: {todo.body}</h5>
          <h5>Completed: {todo.doned ? "Done" : "Not Done"} </h5>
          <div className="button">
            <button className="done-button" onClick={() => makeItDone(todo.id)}>
              Mark it done
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
            <Link to={`/edit/${todo.id}`}>
              <button className="edit-button">Edit</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTodoList;

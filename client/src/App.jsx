import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetAll from "./GetAll.jsx";
import Edit from "./Edit.jsx";
import Add from "./Add.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/get-all",
    element: <GetAll />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

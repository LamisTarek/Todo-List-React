//for routing
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Edit from "./Pages/Edit/Edit";
import Create from "./Pages/Create/Create";
import Todo from "./Pages/Todo/Todo";
import Details from "./Pages/Details/Details"


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/creat-todo",
    element: <Create/>,
  },
  {
    path: "/edit-todo/:id",
    element: <Edit />,
  },
  {
    path: "/show-todo/:id",
    element: <Details />,
  },

]);

export default Routes;

import React from "react";
import { BrowserRouter , RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Header from "./components/header/";

import Home from "./pages/";
import MyRecipe from "./pages/myRecipe.tsx";

import 'virtual:uno.css'
import "./index.scss";


//TODO: Fix This

const router = BrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/myRecipe",
    element: <MyRecipe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="main">
      <Header />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);

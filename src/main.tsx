import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Root from "./routes/root";
import Home from "./routes/index";
import MyRecipe from "./routes/myRecipe";
import ErrorPage from "./error-page";

import "virtual:uno.css";
import '@unocss/reset/tailwind.css'
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/myRecipe",
        element: <MyRecipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

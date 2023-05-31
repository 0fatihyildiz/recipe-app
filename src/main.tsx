import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Root from "./routes/root";


import Home from "./routes/index.tsx";
import MyRecipe from "./routes/myRecipe.tsx";
import MyIngridients from "./routes/myIngridients.tsx";

// import Loading from "./components/app/preLoad";
import ErrorPage from "./error-page";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import "./index.scss";

// const Home = React.lazy(() => import("./routes/index"));
// const MyRecipe = React.lazy(() => import("./routes/myRecipe"));
// const MyIngridients = React.lazy(() => import("./routes/myIngridients"));

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
      {
        path: "/myIngridients",
        element: <MyIngridients />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Suspense fallback={<Loading/>}> */}
      <RouterProvider router={router} />
    {/* </Suspense> */}
  </React.StrictMode>
);

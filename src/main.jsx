import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/carta",
        element: <Menu />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

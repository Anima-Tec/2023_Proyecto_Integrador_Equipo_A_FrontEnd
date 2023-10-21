import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/About us/AboutUs";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reports from "./pages/Reports/Reports";
import { SessionContext } from "./context/SessionContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home leftContainer="Login" />,
  },
  {
    path: "/register",
    element: <Home leftContainer="Register" />,
  },
  {
    path: "/communities",
    element: <Home leftContainer="Communities" />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/reports",
    element: <Reports category="show" />,
  },
  {
    path: "/reports/new",
    element: <Reports category="new" />,
  },
]);
// @ts-ignore
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SessionContext.Provider value={localStorage.getItem("token")!}>
      <RouterProvider router={router} />
    </SessionContext.Provider>
  </React.StrictMode>
);

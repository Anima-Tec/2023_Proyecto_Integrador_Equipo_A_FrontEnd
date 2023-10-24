import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/Aboutus/AboutUs";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Reports from "./pages/Reports/Reports";
import { SessionContext } from "./context/SessionContext";
import Communities from "./components/LeftContainerContent/Home/comunity/Communities";

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
    path: "/communities/add",
    element: <Home leftContainer="NewCommunity" />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/communities/:id",
    element: <Reports category="showAll" />,
  },
  {
    path: "/communities/:id/new",
    element: <Reports category="new" />,
  },
  {
    path: "/communities/report/:id",
    element: <Reports category="show" />,
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

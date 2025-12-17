import { createBrowserRouter } from "react-router-dom";
import Header from "./Layout/Header";
import Home from "./Home";
import ProjectDetails from "./Projects/ProjectDetails";
import Header2 from "./Layout/Header2";
import AdminHeader from "./Admin/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "/contact",
        element: <h1>Contact Us page</h1>,
      },
    ],
  },
  {
    path: "/h2",
    element: <Header2 />,
    children: [
      {
        path: "/h2/project/:name",
        element: <ProjectDetails />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminHeader />,
    children: [
      {
        index: true,
        element: <h1> Dashboard</h1>,
      },
    ],
  },
]);

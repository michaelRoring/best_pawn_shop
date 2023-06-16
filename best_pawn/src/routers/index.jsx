import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/notfound",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;

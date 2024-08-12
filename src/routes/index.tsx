import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../pages";
import Layout from "../widgets/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;

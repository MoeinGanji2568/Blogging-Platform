import { createBrowserRouter } from "react-router-dom";
import { commonRoute } from "./common.router";
import PanelLayout from "../../components/Layout/PanelLayout";
import Dashboard from "../../components/Panel/Dashboard";

export const authRoutes = createBrowserRouter([
  ...commonRoute,
  {
    element: <PanelLayout />,
    children: [
      {
        path: "/panel/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

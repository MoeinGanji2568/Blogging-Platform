import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../../components/Layout/AuthLayout";
import MainLayout from "../../components/Layout/MainLayout";
import Register from "../../screens/Register";
import { commonRoute } from "./common.router";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    element: <MainLayout />,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          { path: "/auth/sign-up", element: <Register /> },
          // { path: "/auth/sign-in", element: <Login /> },
        ],
      },
    ],
  },
]);

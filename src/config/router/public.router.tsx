import { createBrowserRouter } from "react-router-dom";
import { commonRoute } from "./common.router";
import MainLayout from "../../components/Layout/MainLayout";
import AuthLayout from "../../components/Layout/AuthLayout";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    element: <MainLayout />,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,
        //   children: [
        //     { path: "/auth/sign-up", element: <SignUp /> },
        //     { path: "/auth/sign-in", element: <Login /> },
        //   ],
      },
    ],
  },
]);

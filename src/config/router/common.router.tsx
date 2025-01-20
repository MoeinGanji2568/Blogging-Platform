import MainLayout from "../../components/Layout/MainLayout";
import BlogDetail from "../../screens/BlogDetails";
import Blog from "../../screens/Blogs";
import Landing from "../../screens/Landing";
export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Landing />, index: true },
      { path: "/blogs", element: <Blog /> },
      { path: "/blogs/:id", element: <BlogDetail /> },
    ],
  },
];

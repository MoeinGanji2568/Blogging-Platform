import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "../config/router/public.router";

function App() {
  return <RouterProvider router={publicRoutes} />;
}

export default App;

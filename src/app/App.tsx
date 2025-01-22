import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "../config/router/public.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../contexts/auth/auth.provider";
import { authRoutes } from "../config/router/auth.router";
import { Spinner } from "../components/ui/Spinner";

function App() {
  const queryClient = new QueryClient();
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);

  if (isAuthenticated === null) return <Spinner />;

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={isAuthenticated ? authRoutes : publicRoutes} />
      <ReactQueryDevtools />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "../config/router/public.router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={publicRoutes} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

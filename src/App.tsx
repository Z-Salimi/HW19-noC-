import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./components/errorBoundary";
import { NotFound } from "./pages/notFound";
import { Home } from "./pages/home";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "404",
    element: <NotFound />,
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;

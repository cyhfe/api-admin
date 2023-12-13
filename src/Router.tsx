import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { RequireAuth } from "./Auth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NoMatch from "./pages/NoMatch";
import { AuthProvider } from "./Auth/index.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);
export default function Router() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

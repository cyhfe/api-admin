import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/index.tsx";
import { RequireAuth } from "./Auth/index.tsx";
import Login from "./pages/Login/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import NoMatch from "./pages/NoMatch/index.tsx";

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
  return <RouterProvider router={router} />;
}

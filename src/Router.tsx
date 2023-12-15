import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/index.tsx";
import { RequireAuth } from "./Auth/index.tsx";
import Login from "./pages/Login/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import NoMatch from "./pages/NoMatch/index.tsx";
import Signup from "./pages/signup/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),

    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

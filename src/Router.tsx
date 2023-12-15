import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout/index.tsx";
import { RequireAuth } from "./Auth/index.tsx";
import Login from "./pages/Login/index.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import NoMatch from "./pages/NoMatch/index.tsx";
import Signup from "./pages/signup/index.tsx";
import Upload from "./pages/Upload/index.tsx";
import Users from "./pages/Users/index.tsx";

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
        path: "users",
        element: <Users />,
      },
      {
        path: "upload",
        element: <Upload />,
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
  {
    path: "*",
    element: <NoMatch />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

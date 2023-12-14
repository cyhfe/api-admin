import { createContext } from "@cyhfe/react-ui";
import * as React from "react";
import { Navigate, redirect, useLocation } from "react-router-dom";
import { request } from "../request";

interface User {
  username: string;
  id: string;
}
interface AuthContextValue {
  user: User | null;
  updateUser: (user: User) => void;
}
const [Auth, useAuth] = createContext<AuthContextValue>("AuthProvider");

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);
  const [autoLoginDone, setAutoLoginDone] = React.useState(false);
  const updateUser = React.useCallback((user: User) => {
    setUser(user);
  }, []);

  React.useEffect(() => {
    (async () => {
      if (!user) {
        const token = localStorage.getItem("access_token");
        if (token) {
          try {
            const res = await request({
              method: "POST",
              url: "/auth/autoLogin",
              data: { token },
            });
            updateUser(res.data.user);
            setAutoLoginDone(true);
          } catch (e) {
            localStorage.removeItem("access_token");
            redirect("/login");
            setAutoLoginDone(true);
          }
        } else {
          setAutoLoginDone(true);
        }
      }
    })();
  }, [updateUser, user]);

  if (!autoLoginDone) return null;

  return (
    <Auth user={user} updateUser={updateUser}>
      {children}
    </Auth>
  );
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth("RequireAuth");
  const location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export { AuthProvider, useAuth, RequireAuth };

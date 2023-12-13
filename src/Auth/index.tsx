import { createContext } from "@cyhfe/react-ui";
import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface User {
  username: string;
  id: string;
}
interface AuthContextValue {
  user: User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}
const [Auth, useAuth] = createContext<AuthContextValue>("AuthProvider");

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null);

  const login = React.useCallback(async () => {
    await new Promise((r) => setTimeout(r, 500));
    setUser({ username: "123", id: "1" });
  }, []);

  const logout = React.useCallback(async () => {
    await new Promise((r) => setTimeout(r, 500));
    setUser(null);
  }, []);

  return (
    <Auth user={user} login={login} logout={logout}>
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

import { createContext } from "@cyhfe/react-ui";
import * as React from "react";
import { Navigate, useLocation } from "react-router-dom";

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

  const updateUser = React.useCallback((user: User) => {
    setUser(user);
  }, []);

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

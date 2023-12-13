import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";

export default function Login() {
  const { user } = useAuth("Login");
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to={origin} />;
  }
  return <div>login</div>;
}

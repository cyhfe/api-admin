import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";
import Button from "@mui/material/Button";

export default function Login() {
  const { user } = useAuth("Login");
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to={origin} />;
  }
  return (
    <div>
      <Button>注册</Button>
      <div className="text-red-400">sada</div>
      <Button>登陆</Button>
    </div>
  );
}

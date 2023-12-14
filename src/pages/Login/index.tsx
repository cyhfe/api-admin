import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";

export default function Login() {
  const { user } = useAuth("Login");
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to={origin} />;
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
}

function LoginForm() {
  const { handleSubmit, reset, setValue, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="flex flex-col gap-y-5"
      >
        <Controller
          render={({ field }) => (
            <TextField label="用户名" size="small" {...field} />
          )}
          name="username"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField type="password" size="small" label="密码" {...field} />
          )}
          name="password"
          control={control}
        />
        <Button type="submit" variant="outlined">
          登陆
        </Button>
      </form>
    </div>
  );
}

import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import Link from "@mui/material/Link";

export default function Register() {
  const { user } = useAuth("Register");
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to={origin} />;
  }

  return (
    <div>
      <RegisterForm />
    </div>
  );
}

function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-5">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="flex flex-col gap-y-5"
        >
          <Controller
            rules={{
              required: {
                value: true,
                message: "请输入用户名",
              },
              minLength: {
                value: 6,
                message: "用户名不能少于6位",
              },
            }}
            render={({ field, fieldState: { error } }) => {
              return (
                <TextField
                  label="用户名"
                  size="small"
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                />
              );
            }}
            name="username"
            control={control}
          />
          <Controller
            rules={{
              required: {
                value: true,
                message: "请输入密码",
              },
              minLength: {
                value: 6,
                message: "密码不能少于6位",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="password"
                size="small"
                label="密码"
                error={!!error}
                helperText={error?.message}
                {...field}
              />
            )}
            name="password"
            control={control}
          />
          <Button type="submit" variant="outlined">
            注册
          </Button>
        </form>
        <div>
          <span>
            已有账号？去
            <Link component={RouterLink} to="/login">
              登陆
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

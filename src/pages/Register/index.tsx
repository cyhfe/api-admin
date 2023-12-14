import { Link as RouterLink, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import Link from "@mui/material/Link";
import { request } from "../../request";
import toast from "react-hot-toast";
import { AxiosError, isAxiosError } from "axios";
export default function Register() {
  const { user } = useAuth("Register");
  const location = useLocation();
  const origin = location.state?.from?.pathname || "/";
  if (user) {
    return <Navigate to={origin} />;
  }

  return <RegisterForm />;
}

function RegisterForm() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { updateUser } = useAuth("RegisterForm");

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-5">
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              const res = await request({
                method: "POST",
                url: "/auth/signup",
                data,
              });
              updateUser(res.data.user);
              console.log(res.data.access_token);
              localStorage.setItem("access_token", res.data.accessToken);
            } catch (e) {
              const error = e as Error | AxiosError;
              if (isAxiosError(error)) {
                const message = error.response?.data?.message;
                message && toast.error(message);
              }
            }
          })}
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
        <div className="text-sm">
          <span>
            已有账号？去
            <Link component={RouterLink} to="/login">
              登录
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
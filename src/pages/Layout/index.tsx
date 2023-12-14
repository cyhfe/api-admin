import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../Auth";
import { ReactNode } from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function Layout() {
  return (
    <div className="absolute inset-0 flex flex-col ">
      <Header />
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <nav className="w-[300px]  overflow-y-auto">
          <Sidebar />
        </nav>
        <main className="flex-1  overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function Header() {
  const { updateUser, user } = useAuth("Header");

  return (
    <div className="flex justify-between items-center px-6 py-2 border-b border-solid border-slate-200">
      <Link to="/">
        <Typography variant="h6" className="text-black/50">
          Dashboard
        </Typography>
      </Link>
      <Button className="flex items-center">
        <span>{user?.username}</span>
      </Button>
    </div>
  );
}

function Main(props: { children: ReactNode }) {
  return <div>{props.children}</div>;
}

function Sidebar() {
  return <div>sidebar</div>;
}

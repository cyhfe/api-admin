import { Link, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../Auth";
import { Button, Menu } from "antd";

export default function Layout() {
  return (
    <div className="absolute inset-0 flex flex-col ">
      <Header />
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <nav className="px-2 py-1 overflow-y-auto border-r border-t-0 border-solid border-slate-200">
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
      <Link to="/" className="text-slate-700">
        Dashboard
      </Link>
      <div>
        <span>{user?.username}</span>
        <Button
          type="link"
          onClick={() => {
            updateUser(null);
            localStorage.removeItem("access_token");
          }}
        >
          退出登陆
        </Button>
      </div>
    </div>
  );
}

const items = [
  {
    key: "/users",
    label: <Link to={"/users"}>users</Link>,
  },
  {
    key: "/upload",
    label: <Link to={"/upload"}>upload</Link>,
  },
  {
    key: "/public",
    label: <Link to={"/public"}>public</Link>,
  },
  {
    key: "/public2",
    label: <Link to={"/public2"}>public</Link>,
  },
];

function Sidebar() {
  const { pathname } = useLocation();
  return (
    <Menu
      selectedKeys={[pathname]}
      style={{ width: 256 }}
      mode="inline"
      items={items}
      className="border-none"
    />
  );
}

import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../Auth";
import React, { ReactNode } from "react";

export default function Layout() {
  return (
    <div className="absolute inset-0 flex flex-col ">
      <Header />
      <div className="flex-1 flex flex-row overflow-y-hidden">
        <nav className="px-8 py-2  overflow-y-auto border-r border-t-0 border-solid border-slate-200">
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
      <Link to="/">Dashboard</Link>

      <span>{user?.username}</span>
    </div>
  );
}

const menu = [
  {
    name: "上传文件",
    path: "/upload",
  },
  {
    name: "上传文件",
    path: "/upload",
  },
  {
    name: "上传文件",
    path: "/upload",
  },
  {
    name: "上传文件",
    path: "/upload",
    children: [
      {
        name: "asd",
        path: "asdds",
      },
    ],
  },
];

function Sidebar() {
  return (
    <div className="">
      <div>asd</div>

      <div>asds</div>
    </div>
  );
}

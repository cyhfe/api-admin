import { Outlet } from "react-router-dom";
import { useAuth } from "../../Auth";
import { ReactNode } from "react";

export default function Layout() {
  return (
    // <div>
    //   <Header />
    //   <Main>
    //     <Sider />
    //     <Outlet />
    //   </Main>
    // </div>

    <div className="absolute inset-0 flex flex-col ">
      <header className="bg-red-50">Header</header>

      <div className="flex-1 flex flex-row overflow-y-hidden">
        <nav className=" sm:w-32 bg-purple-200 overflow-y-auto">
          Sidebar
          <div className="h-[1200px]">asd</div>
        </nav>

        <main className="flex-1 bg-indigo-100 overflow-y-auto">
          Content here
          <div className="">asd</div>
        </main>

        {/* <aside className="sm:w-32 bg-yellow-100 overflow-y-auto">
          Right Sidebar
          <div className="h-[1200px]">sda</div>
        </aside> */}
      </div>
    </div>
  );
}

function Header() {
  const { updateUser } = useAuth("Header");

  return (
    <div className="sticky top-0 p-2 bg-slate-300 ">
      <button
        onClick={async () => {
          localStorage.removeItem("access_token");
          updateUser(null);
        }}
      >
        logout
      </button>
    </div>
  );
}

function Main(props: { children: ReactNode }) {
  return <div className="flex">{props.children}</div>;
}

function Sider() {
  return (
    <div className="w-[300px]  top-[60px] h-screen  overflow-y-auto sticky ">
      <div className="h-[1200px] bg-red-300"></div>
      sider
    </div>
  );
}

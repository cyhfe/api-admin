import { Outlet } from "react-router-dom";
import { useAuth } from "../../Auth";

export default function Layout() {
  const { updateUser } = useAuth("Layout");
  return (
    <div>
      <Outlet />
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

import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./Auth/index.tsx";

import Router from "./Router.tsx";
import Toaster from "./components/Toaster.tsx";

export default function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <Toaster />
      <Router />
    </AuthProvider>
  );
}

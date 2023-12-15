import { AuthProvider } from "./Auth/index.tsx";

import Router from "./Router.tsx";

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

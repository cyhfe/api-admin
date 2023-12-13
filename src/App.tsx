import { AuthProvider } from "./Auth/index.tsx";
import { BaseStyles, ThemeProvider } from "@primer/react";
import Router from "./Router.tsx";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <BaseStyles>
          <Router />
        </BaseStyles>
      </ThemeProvider>
    </AuthProvider>
  );
}

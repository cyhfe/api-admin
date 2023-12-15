import { AuthProvider } from "./Auth/index.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./Router.tsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </QueryClientProvider>
  );
}

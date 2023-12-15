import { request } from "../../request";
import { useQuery } from "react-query";

interface User {
  username: string;
  id: string;
}

type GetUsersResponse = User[];
export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () =>
      await request.get<GetUsersResponse>("users").then((res) => {
        return res.data;
      }),
    // staleTime: 3000,
  });
}

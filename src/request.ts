import "vite/client";

import axios from "axios";

export const request = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
});

export default request;

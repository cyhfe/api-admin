import axios from "axios";

export const request = axios.create({
  baseURL: import.meta.env.VITE_ENDPOINT,
});

export const post = axios.create({
  method: "POST",
  baseURL: import.meta.env.VITE_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

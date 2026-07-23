import axios from "axios";

console.log("API URL =", import.meta.env.VITE_API_URL);
const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});
if (!import.meta.env.VITE_API_URL) {
  console.error("VITE_API_URL is not set — API calls will fail");
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (
        !window.location.pathname.includes("/login") &&
        !window.location.pathname.includes("/register")
      ) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export default api;

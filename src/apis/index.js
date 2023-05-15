import axios from "axios";

export const api = axios.create({
  timeout: 325000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  baseURL: "https://swapi.dev/api",
  defaults: { responseType: "json" },
});

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  api.interceptors.request.use((request) => {
    console.log(">>> Request", request);
    return request;
  });
  api.interceptors.response.use(
    (response) => {
      console.log("<<< Response:", response);
      return response;
    },
    (error) => {
      console.log("*** ", error);
      return Promise.reject(error);
    }
  );
}

export * from "./movieApi";

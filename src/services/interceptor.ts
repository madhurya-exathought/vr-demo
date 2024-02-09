
import axios from "axios";

// axios.interceptors.request.use(
//   (config) => {
//     // You can modify the request config here, such as adding headers
//     config.headers["Authorization"] = "Bearer your_access_token";
//     return config;
//   },
//   (error) => {
//     console.error("Error in request interceptor:", error);
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(
  (response) => {
    // You can modify the response data here
    return response;
  },
  (error) => {
    console.error("Error in response interceptor:", error);
    return Promise.reject(error);
  }
);

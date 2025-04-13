import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://user-auth-k2wn.onrender.com/api",
});

usersApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export const createAccount = async (userdetails) => {
  await usersApi.post("/users/registration", userdetails);
};

export const loginUser = async (userdetails) => {
  await usersApi.post("/users/login", userdetails);
};

export const getUserDetails = async (email) => {
  const { data } = await usersApi.get(`/users/${email}`);
  return data;
};

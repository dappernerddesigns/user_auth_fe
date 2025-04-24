import axios from "axios";

const usersApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const createAccount = async (userdetails) => {
  await usersApi.post("/users/registration", userdetails);
};

export const loginUser = async (userdetails) => {
  const {
    data: { token, id },
  } = await usersApi.post("/users/login", userdetails);
  localStorage.setItem("portal_token", token);
  return { token, id };
};

export const getUserDetails = async (id) => {
  const token = localStorage.getItem("portal_token");
  const { data } = await usersApi.get(`/users/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });

  return data;
};

export const deleteAccount = async (id) => {
  const token = localStorage.getItem("portal_token");
  await usersApi.delete(`/users/${id}`, {
    headers: { authorization: `Bearer ${token}` },
  });
};

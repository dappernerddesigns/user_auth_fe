import axios from "axios";

const usersApi = axios.create({
  baseURL: "https://user-auth-k2wn.onrender.com/api",
});

export const createAccount = async (userdetails) => {
  const { data } = await usersApi.post("/users/registration", userdetails);
  console.log(data);
  return data;
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

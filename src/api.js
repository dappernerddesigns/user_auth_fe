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
    data: { token },
  } = await usersApi.post("/users/login", userdetails);
  localStorage.setItem("portal_token", token);
  return token;
};

export const getUserDetails = async (email) => {
  console.log("details requested for ", email);
  const token = localStorage.getItem("portal_token");
  const { data } = await usersApi.get(`/users/${email}`, {
    headers: { authorisation: `Bearer ${token}` },
  });
  console.log("got user", { data });
  return data;
};

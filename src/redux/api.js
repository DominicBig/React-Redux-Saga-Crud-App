import axios from "axios";

export const loadUsersApi = async () => {
  return await axios.get("http://localhost:3001/users");
};

export const createUserApi = async (user) => {
  return await axios.post("http://localhost:3001/users", user);
};

export const deleteUserApi = async (userId) => {
  return await axios.delete(`http://localhost:3001/users/${userId}`);
};

export const editUserApi = async (userId, userInfo) => {
  return await axios.put(`http://localhost:3001/users/${userId}`, userInfo);
};

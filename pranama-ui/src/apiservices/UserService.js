import apiClient from "@/shared/axios";

export default {
  register,
  getRegistration,
  login,
  logout
};

function register (params) {
  console.log(JSON.stringify(params));
  return apiClient.post("/api/user/register", params);
}

function getRegistration () {
  return apiClient.get("/api/user/register");
}

async function login (username, password) {
  const response = await apiClient.post("/api/user/login", { userName: username, passWord: password })
  if (response.data.token !== null) {
    localStorage.setItem('token', JSON.stringify(response.data.token));
  } else {
    return Promise.reject("Wrong credentials");
  }
  return response;
}

function logout () {
  localStorage.removeItem('token');
}
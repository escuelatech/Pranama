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

async function login (email, password) {
  console.log(email);
  console.log(password);
  const response = await apiClient.post("/api/user/login", { email: email, passWord: password })
  if (response.data.token !== null) {
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('email', JSON.stringify(email));
  } else {
    return Promise.reject("Wrong credentials");
  }
  return response;
}

function logout () {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
}
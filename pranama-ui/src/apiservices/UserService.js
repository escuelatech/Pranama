import apiClient from "@/shared/axios";
import apimapping from "@/shared/apimapping.js";

export default {
  register,
  getRegistration,
  login,
  logout,
  getUsers,
  getUser,
  updateUser,
  getUserRequests
};

function register (params) {
  // console.log(JSON.stringify(params));
  return apiClient.post(apimapping.USER_REGISTRATION, params);
}

function getRegistration () {
  return apiClient.get(apimapping.USER_REGISTRATION);
}

function getUsers () {
  return apiClient.get(apimapping.GET_USERS);
}

function getUser (email) {
  return apiClient.get(apimapping.GET_USER+email);
}

function getUserRequests (email) {
  return apiClient.get("/api/hospital/fetch/requests?email="+email);
}

function updateUser (params) {
  return apiClient.put(apimapping.UPDATE_USER, params);
}

async function login (email, password) {
  // console.log(email);
  // console.log(password);
  const response = await apiClient.post(apimapping.LOGIN, { email: email, passWord: password })
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
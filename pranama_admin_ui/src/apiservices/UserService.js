import apiClient from "@/shared/axios";

export default {
  register,
  getRegistration,
  login,
  logout,
  getUsers,
  getUser,
  getUserRequests,
  getSelectedRequest,
  socialLogin
};

function register (params) {
  console.log(JSON.stringify(params));
  return apiClient.post("/api/user/register", params);
}
function getRegistration () {
   return apiClient.get("/api/user/register");
}

function getUsers () {
  return apiClient.get("/api/user/getallusers");
}

function getUser (email) {
  return apiClient.get("/api/user/fetchuser/?registereduser="+email);
}

function getUserRequests (email) {
  console.log('userservice email' + email);
  return apiClient.get("/api/hospital/fetch/requests?email="+email);
 
}

function getSelectedRequest(msgId) {
  console.log('Msgid: ' , msgId);
  return apiClient.get('/api/hospital/fetch/request/'+msgId);
}

async function login (email, password, socialLogin) {
  const response = await apiClient.post("/api/user/login", { email: email, 
    passWord: password, socialLogin:socialLogin});

  if (response.data.token !== null) {
    localStorage.setItem('token', JSON.stringify(response.data.token));
    localStorage.setItem('email', JSON.stringify(email));
  } else {
    return Promise.reject("Please check your username and password ");
  }
  return response;
}

async function socialLogin (email, password) {
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
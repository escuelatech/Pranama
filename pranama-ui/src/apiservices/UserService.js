import apiClient from "@/shared/axios";

export default {
  register (params) {
    return apiClient.post("/api/user/register", params);
  },
  getRegistration () {
    return apiClient.get("/api/user/register");
  },
};
import apiClient from "./axios";

export default {
  sendEmail (params) {
    return apiClient.post("/api/email/contactus", params);
  }
};
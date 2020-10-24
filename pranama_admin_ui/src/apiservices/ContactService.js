import apiClient from "@/shared/axios";

export default {
  submitContact (params) {
    return apiClient.post("/api/email/contactus", params);
  }
};
import apiClient from "@/shared/axios";
import apimapping from "@/shared/apimapping.js";

export default {
  submitContact (params) {
    return apiClient.post(apimapping.CONTACT_US_EMAIL, params);
  }
};
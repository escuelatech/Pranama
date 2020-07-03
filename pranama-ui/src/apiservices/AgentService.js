import apiClient from "@/shared/axios";
import apimapping from "@/shared/apimapping.js";

  export default {
    onBoardAgent
  };

  function onBoardAgent(params) {
    console.log(JSON.stringify(params));
    return apiClient.post(apimapping.AGENT_ONBOARDING, params);
  }
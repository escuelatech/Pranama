import apiClient from "@/shared/axios";

export default {
  getAgent,
  getAgents,
  addAnAgent,
  updateAgent
};


function addAnAgent (params) {
  console.log(JSON.stringify(params));
  return apiClient.post("/api/agent/save", params);
}

function getAgents () {
  return apiClient.get("api/agent/fetchall");
}

function getAgent (email) {
  return apiClient.get("/api/agent/fetchagent/?registeredemail="+email);
}

function updateAgent (params) {
  console.log("params", JSON.stringify(params));
  return apiClient.post("/api/agent/update",params);
}
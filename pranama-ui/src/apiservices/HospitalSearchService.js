import apiClient from "@/shared/axios";

export default {
    getHospitalList
};

function getHospitalList() {
    return apiClient.get('/states');
}
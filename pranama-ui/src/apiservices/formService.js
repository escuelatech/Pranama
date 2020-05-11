import apiClient from "@/shared/axios";

export default {
    submitForm (params) {
        return apiClient.post("/api/trauma/form1", params);
},
submitForm2 (params) {
    return apiClient.post("/api/trauma/form2", params);
},
submitPatientPickup (params) {
    return apiClient.post("/api/help/patientpickup", params)
}


};
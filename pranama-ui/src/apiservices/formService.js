import apiClient from "@/shared/axios";

export default {
    submitForm (params) {
            return apiClient.post("/api/trauma/form1", params);
    },
    submitForm2 (params) {
        return apiClient.post("/api/trauma/form2", params);
    },

    submitPatientPickup (params) {
        return apiClient.post("/api/hospital/pickup", params)
    },

    hospitalAssistance (params) {
        console.log(JSON.stringify(params));
        return apiClient.post("/api/hospital/assistance", params);
    },

    commonService () {
        console.log(JSON.stringify());
        return apiClient.get("/api/access");
    }

};
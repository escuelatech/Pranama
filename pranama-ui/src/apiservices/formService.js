import apiClient from "@/shared/axios";
import apimapping from "@/shared/apimapping.js";

export default {
    submitForm (params) {
            return apiClient.post("/api/trauma/form1", params);
    },
    submitForm2 (params) {
        return apiClient.post("/api/trauma/form2", params);
    },

    submitPatientPickup (params) {
        console.log(JSON.stringify(params));
        return apiClient.post(apimapping.PATIENT_PICKUP, params);
    },

    // getPatientPickupData(email){
    //     return apiClient.get('/api/hospital/pickup');
    // },

    hospitalAssistance (params) {
        console.log(JSON.stringify(params));
        return apiClient.post(apimapping.HOSPITAL_ASSISTANCE, params);
    },

    commonService () {
        console.log(JSON.stringify());
        return apiClient.get(apimapping.ACCESS);
    }

};
import apiClient from "@/shared/axios";

export default {


submitCarData (params) {
    console.log(JSON.stringify(params));
    return apiClient.post('/api/carForm')
},



};
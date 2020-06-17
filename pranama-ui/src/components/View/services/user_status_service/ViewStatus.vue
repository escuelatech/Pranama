<template>
    <div>
        <h4>Status</h4>
         <div class="box" >
            <table style="width:100%"  class="alt">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Request</th>
                    <th>Status</th>
                    
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{{user.date}}</td>
                    <td>{{user}}</td>
                    <td>{{user.active}}</td>
                    
                </tr>
            </tbody>
                </table>
            </div>
    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
import formService from '@/apiservices/formService.js';

    export default {
        data() {
            return {
                loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
                user: '',
                pickupData: ''

            }
        },
        mounted(){
            this.getLoggedInUser();
            this.getDataFromPatientPickup();
        },
        methods: {
       getLoggedInUser() {
            UserService.getUser(this.loggedInUserEmail)
                .then(response => {
                    this.user = response.data.data;
                    console.log(this.user);
                   }).catch(error => {
                    console.log("Error reported from endpoints :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
                });
        },
        getDataFromPatientPickup() {
            formService.getPatientPickupData()
                .then(response => {
                    this.pickupData = response.data.data;
                    console.log(this.pickupData)
                }).catch(error => {
                    console.log("Error reported from endpoints :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
                })
        }
        }
    }
</script>

<style lang="scss" scoped>

</style>
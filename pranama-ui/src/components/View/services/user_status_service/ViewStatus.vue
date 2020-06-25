<template>
    <div>
        <h4>Status</h4>
         <div class="box table-wrapper" >
             <table style="width:100%"  class="alt"> 
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient First Name</th>
                  <th>Request Type</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in userRequests" :key="request.email">
                  <td> {{ request.msgId }}</td>
                  <td>{{ request.patientFirstName }}</td>
                  <td>{{ request.requestType }}</td>
                  <td>{{ request.userEmail }}</td>
                </tr>
              </tbody>
            </table> 
            </div>
    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";

    export default {
        data() {
            return {
                loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
                userRequests: [] 
                
            }
        },
        mounted(){
            this.findUsersRequests();
        },
        methods: {
        findUsersRequests() {
            UserService.getUserRequests(this.loggedInUserEmail).then(response => {
                    console.log(response.data.data);
                    this.userRequests=response.data.data;
                    this.displayTable = true;
              }).catch(error => {
                    console.log("Error reported from endpoints :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
             });
        },
       
       
        }
    }
</script>

<style lang="scss" scoped>

</style>
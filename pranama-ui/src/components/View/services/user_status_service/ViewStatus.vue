<template>
    <div>
        <h4>Status</h4>
          <!-- <div class="box table-wrapper" > 
             <table style="width:100%"  class="alt"> 
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Patient First Name</th>
                  <th>Request Type</th>
                  <th>Email</th>
                  <th>Description</th>
                  <th>title</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in userRequests" :key="request.email">
                  <td> {{ request.msgId }}</td>
                  <td>{{ request.patientFirstName }}</td>
                  <td>{{ request.requestType }}</td>
                  <td>{{ request.userEmail }}</td>
                  <td>{{ request.description }}</td>
                  <td>{{request.title}}</td>
                </tr>
                 
              </tbody>
            </table> 
            </div>  -->

            <VueFaqAccordion 
                :items="jsonArr"
            /> 
    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
import VueFaqAccordion from 'vue-faq-accordion';
import moment from "moment";

    export default {
        components: {
            VueFaqAccordion
        },
        data() {
            return {
                loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
                userRequests: [],
                jsonArr: [],
                // date: this.userRequests.date.getDate()
            }
        },
        mounted(){
            this.findUsersRequests();
        },
        methods: {
          moment: function () {
            return moment();
          },
        findUsersRequests() {
            UserService.getUserRequests(this.loggedInUserEmail)
            .then(response => {
                    this.userRequests=response.data.data;
                      console.log(this.userRequests);
                      for (var i = 0; i < this.userRequests.length; i++) {
                        this.jsonArr.push({
                          title: this.userRequests[i].requestType + " ( " + moment(this.userRequests[i].date).format('MMMM Do YYYY') + " )",
                          value: this.userRequests[i].description
                        });
                      }
                      console.log('JSON ARRAY',this.jsonArr)
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
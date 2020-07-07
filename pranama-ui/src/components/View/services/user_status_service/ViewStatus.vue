<template>
    <div>
      <header class="major">
        <h2>Status</h2>
      </header>
        

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
                        if(this.userRequests[i].requestType == "Patient Pickup") {
                        this.jsonArr.push({
                        title: "<b>" + this.userRequests[i].requestType + "</b> ( " + moment(this.userRequests[i].date).format('MMMM Do YYYY') + " )",
                        value: "<b>Patient Name: </b>" + this.userRequests[i].patientFirstName + " " + this.userRequests[i].patientLastName + 
                                "<br /><b>Email: </b>" + this.userRequests[i].userEmail +
                                "<br /><b>Pickup Location: </b>" + this.userRequests[i].pickupLocation +
                                "<br /><b>Dropoff Location: </b>" + this.userRequests[i].dropoffLocation +
                                "<br /><b>Time: </b>" + this.userRequests[i].time + 
                                "<br /><b>Vehicle Type: </b>" + this.userRequests[i].vehicle +
                                "<br /><b>Phone Number: </b>" + this.userRequests[i].phoneNumber +  
                                "<br /><b>Description: </b>" + this.userRequests[i].description
                        
                      })
                      } else {
                         this.jsonArr.push({
                        title: "<b>" + this.userRequests[i].requestType + "</b> ( " + moment(this.userRequests[i].date).format('MMMM Do YYYY') + " )",
                        value: "<b>Patient Name: </b>" + this.userRequests[i].patientFirstName + " " + this.userRequests[i].patientLastName + 
                                "<br /><b>Email: </b>" + this.userRequests[i].userEmail +
                                "<br /><b>Doctor: </b>" + this.userRequests[i].doctorName + 
                                "<br /><b>Hospital: </b>" + this.userRequests[i].hospitalName + 
                                "<br /><b>Hospital Location: </b>" + this.userRequests[i].hospitalLocation + 
                                "<br /><b>Time: </b>" + this.userRequests[i].time + 
                                "<br /><b>Description: </b>" + this.userRequests[i].description
                        
                      })
                      }
                      
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
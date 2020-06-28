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
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="request in userRequests" :key="request.email">
                  <td> {{ request.msgId }}</td>
                  <td>{{ request.patientFirstName }}</td>
                  <td>{{ request.requestType }}</td>
                  <td>{{ request.userEmail }}</td>
                  <td>{{ request.description }}</td>
                </tr>
                 
              </tbody>
            </table> 
            </div>
            <VueFaqAccordion 
                :items="myItems"
                :title="title"
            />
    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
import VueFaqAccordion from 'vue-faq-accordion';

    export default {
        components: {
            VueFaqAccordion
        },
        data() {
            return {
                loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
                userRequests: [] ,
                myItems: [
                    {
                        title: 'Hello',
                        value: 'Hi',
                        category: 'Requests'
                    }
                    ],
                userRequestArray: []
                
            }
        },
        props: {

  /**
   * Array of items
   * Object style {questionProperty: string, answerProperty: string, tabName: string}
   * You can change object keys names using other props (questionProperty, answerProperty, tabName)
   */
  items: {
    type: Array,
    required: true
  },

  /**
   * Key name of object in items array for specifying title of question
   */
  questionProperty: {
    type: String,
    default: 'title'
  },
  
  /**
   * Key name of object in items array for specifying content text of open question
   */
  answerProperty: {
    type: String,
    default: 'value'
  },
  
  /**
   * Key name of object in items array for specifying navigation tab name
   */
  tabName: {
    type: String,
    default: 'category'
  },
  
 /**
  * Color for hover and active tab/question
  * possible format: 'red', '#F00', 'rgba(255, 0, 0, 1)'
  */
  activeColor: {
    type: String,
    default: '#D50000'
  },
  
  /**
   * Color for borders
   */
  borderColor: {
    type: String,
    default: '#9E9E9E'
  },
  
  /**
   * Color for fonts
   */
  fontColor: {
    type: String,
    default: '#000000'
  }
  
},
        mounted(){
            this.findUsersRequests();
        },
        methods: {
        findUsersRequests() {
            UserService.getUserRequests(this.loggedInUserEmail).then(response => {
                   
                    this.userRequests=response.data.data;
                      console.log(this.userRequests);
                    // for(var i=1; i <= this.userRequests.length; i++) {
                    //     this.userRequestArray = response.data.data;
                    //     console.log(this.userRequestArray);
                    //     console.log(" Request Type = ", this.userRequestArray[i].requestType) 
                    // }
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
<template>
    <div>
 <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Header -->
          <!-- Form -->
          <div v-show="displayAccordion" align="right">
          
         
          <button class="button secondary contact" @click="displaySearchUserButton">Search Users</button>
          </div>
          
      <div  v-show="!displayAccordion">
         <div>
            <h3 v-show = "isError">{{errorMessage}}</h3>
            <form @submit.prevent="findRegisteredUsers">
              <header class="major">
              <h2>Search Users</h2>
            </header>
            <div class="row gtr-uniform box">
              <div class="col-6 col-12-xsmall">
              <vue-bootstrap-typeahead class="mb-4"  
                  v-model="query" :data="users" :serializer="user => user.email"  
                  @hit="selectedUser = $event"
                  placeholder="Search Pranama users" />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
              </div>
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li>
                    <input type="submit" value="FIND USER" class="primary"  /></li>
                   <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
          </div>
          
          <div class="box" v-show="displayTable">
            <table>
              <tr>
              <td>Name</td>
              <td>Status</td>
              <td v-show="displayAction">Action</td>
                </tr>
                  <tr >
                      <td>{{ user.firstName }}</td>
                      <td>{{ user.active }}</td>
                      <td v-show="displayAction"><input type="button" value="Find Requests" class="primary" v-on:click="findUsersRequests"  /></td>
                  </tr>
              </table>
          </div>
        </div>

          <div v-show="displayAccordion">
            <header class="major">
              <h2>Search Results</h2>
            </header>
             <!-- <VueFaqAccordion 
                :items="jsonArr"
            /> -->
            <v-expansion-panels>
              <v-expansion-panel
                v-for="user in userRequestArr"
                :key="user.msgId"
              >
                <v-expansion-panel-header>
                  {{user.title}} {{user.date}}
                </v-expansion-panel-header>
                <v-expansion-panel-content v-if="user.title === 'Patient Pickup'" focusable>
                   <b>Patient Name: </b> {{user.name}} <br>
                   <b>Patient Email: </b> {{user.email}} <br>
                   <b>Pickup Location: </b> {{user.pickupLocation}} <br>
                   <b>Drop-off Location: </b> {{user.dropoffLocation}} <br>
                   <b>Time: </b> {{user.time}} <br>
                   <b>Vehicle: </b> {{user.vehicle}} <br>
                   <b>Phone Number: </b> {{user.phoneNumber}} <br>
                   <b>Description: </b>{{user.description}} <br>
                   <b>UserId: </b>{{user.msgId}}
                  <v-divider></v-divider>
                  <v-btn tilt outlined @click="$router.push({name: 'listRequest', params: {msgId: user.msgId}})" color='primary' class="mr-2">View Request</v-btn>
                </v-expansion-panel-content>

                <v-expansion-panel-content v-else focusable>
                   <b>Patient Name: </b> {{user.name}} <br>
                   <b>Patient Email: </b> {{user.email}} <br>
                   <b>Doctor Name: </b> {{user.doctorName}} <br>
                   <b>Hospital Name: </b> {{user.hospitalName}} <br>
                   <b>Hospital Location: </b> {{user.hospitalLocation}} <br>
                   <b>Time: </b> {{user.time}} <br>
                   <b>Description: </b>{{user.description}} <br>
                   <b>UserId: </b>{{user.msgId}}
                  <v-divider></v-divider>
                  <v-btn tilt outlined @click="$router.push({name: 'listRequest', params: {msgId: user.msgId}})" color='primary' class="mr-2">View Request</v-btn>
                </v-expansion-panel-content>
<!-- selectedUserRequest(user); $ -->
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          
          
    
        </div>
      </div>
      <!-- Main ends -->
      <!-- Sidebar -->
      <Sidebar />
      <!-- Sidebar -->
    </div>
    </div>
</template>

<script>
import Sidebar from "@/components/View/common/Sidebar.vue"
import Header from "@/components/View/common/Header.vue";
import UserService from "@/apiservices/UserService";
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
// import VueFaqAccordion from 'vue-faq-accordion';
import moment from "moment";

    export default {
      components: {
        // VueFaqAccordion,
        Sidebar,
        Header,
        VueBootstrapTypeahead
        },
    data() {
        return {
            isError: false,
            email: "",
            firstName:"",
            lastName: "",
            phoneNumber: "",
            country: "",
            msge: [],
            errorMessage:[],
            user:"",
            query: '',
            users: [],
            userRequests: [],
            displayAccordion: false, 
            userRequestArr: [],
            displayTable: false,
            displayAction: false,
            msgId: null,
            selectedRequest: []
        }
      },
    watch: {
      query() {
        UserService.getUsers().then((res) => {
            this.users=res.data.data;
        })
      }
    },
    methods: {
      moment() {
        return moment();
      },
        findRegisteredUsers() {
            UserService.getUser(this.query).then(response => {
                    this.user = response.data.data;
                    this.displayTable = true;
                    if(this.user.active !== "PENDING") {
                      this.displayAction = true
                    }
                }).catch(error => {
                    console.log("Error reported from endpoints(findRegisteredUsers) :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
             });
        },
        findUsersRequests() {
            UserService.getUserRequests(this.query).then(response => {
                    this.userRequests = response.data.data;
                     console.log("User requests", this.userRequests);
                    this.displayAccordion = true;
                    for(var i=0; i < this.userRequests.length; i++) {
                      if(this.userRequests[i].requestType == "Patient Pickup") {
                        this.userRequestArr.push({
                        title: this.userRequests[i].requestType,
                        date: moment(this.userRequests[i].date).format('MMMM Do YYYY'),
                        name: this.userRequests[i].patientFirstName + " " + this.userRequests[i].patientLastName,
                        email: this.userRequests[i].userEmail,
                        pickupLocation: this.userRequests[i].pickupLocation,
                        dropoffLocation: this.userRequests[i].dropoffLocation,
                        time: this.userRequests[i].time ,
                        vehicle: this.userRequests[i].vehicle,
                        phoneNumber: this.userRequests[i].phoneNumber,  
                        description: this.userRequests[i].description,
                        msgId: this.userRequests[i].msgId
                        
                      })
                      } else {
                          this.userRequestArr.push({
                            title: this.userRequests[i].requestType,
                            date: moment(this.userRequests[i].date).format('MMMM Do YYYY'),
                            name: this.userRequests[i].patientFirstName + " " + this.userRequests[i].patientLastName,
                            email: this.userRequests[i].userEmail,
                            doctorName: this.userRequests[i].doctorName, 
                            hospitalName: this.userRequests[i].hospitalName, 
                            hospitalLocation: this.userRequests[i].hospitalLocation, 
                            time: this.userRequests[i].time, 
                            description: this.userRequests[i].description,
                            msgId: this.userRequests[i].msgId
                          })
                      }
                      
                      
                    }
                    
              }).catch(error => {
                    console.log("Error reported from endpoints(findUsersRequests) :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
             });
        },
        displaySearchUserButton() {
          this.query = '';
          this.user.email = "";
          this.displayAccordion = false;
          this.displayTable = false;
        },
        // selectedUserRequest(userObj) {
        //   console.log('msgid', JSON.stringify(userObj))
        //   UserService.getSelectedRequest(JSON.stringify(userObj.msgId))
        //       .then(response => {
        //           this.selectedRequest = response.data.apiResponse;
        //           console.log("Selected request", this.selectedRequest);
        //       })
        //       .catch(error => {
        //           console.log("Error reported from endpoints (selectedUserRequest) :", error.response);
        //       })
        // },
        check_email(value) {
              // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          this.msge["email"] = "";
        } else {
          this.msge["email"] = "Enter a valid email";
        }
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
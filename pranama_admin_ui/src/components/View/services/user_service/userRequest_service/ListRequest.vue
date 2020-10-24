<template>
<v-app data-app>
     <div>
        <h2>User Request</h2>
        <br>
        <template> 
            <v-card
                class="mx-auto"
                max-width="600"
            >
                <v-card  
                    class="mx-auto my-12"
                    max-width="700" 
                >
                    <v-card-title>{{selectedRequest.requestType}}</v-card-title>
                    <v-list-item>
                        <v-list-item-content v-if="selectedRequest.requestType === 'Patient Pickup'">
                            <p><b>Patient name:</b> {{ selectedRequest.patientFirstName }} {{selectedRequest.patientLastName}}</p> <br>
                            <p><b>Patient email:</b> {{ selectedRequest.userEmail }}</p> <br>
                            <p><b>Pickup Location:</b> {{ selectedRequest.pickupLocation }}</p> <br>
                            <p><b>Drop-off Location:</b> {{ selectedRequest.dropoffLocation }}</p> <br>
                            <p><b>Time:</b> {{selectedRequest.time}}</p> <br>
                            <p><b>Vehicle:</b> {{selectedRequest.vehicle}}</p> <br>
                            <p><b>Phone Number:</b> {{selectedRequest.phoneNumber}}</p> <br>
                            <p><b>Description:</b> {{selectedRequest.description}}</p> <br>
                            <p><b>MsgID:</b> {{selectedRequest.msgId}}</p> <br>
                        </v-list-item-content>

                        <v-list-item-content v-else>
                            <p><b>Patient name:</b> {{ selectedRequest.patientFirstName }} {{selectedRequest.patientLastName}}</p> <br>
                            <p><b>Patient email:</b> {{ selectedRequest.userEmail }}</p>  <br>
                            <p><b>Doctor Name:</b> {{ selectedRequest.doctorName }}</p> <br>
                            <p><b>Hospital Name:</b> {{ selectedRequest.hospitalName }} </p><br>
                            <p><b>Hospital Location:</b> {{selectedRequest.hospitalLocation}} </p><br>
                            <p><b>Time:</b> {{selectedRequest.time}}</p> <br>
                            <p><b>Description:</b> {{selectedRequest.description}}</p> <br>
                            <p><b>MsgID:</b> {{selectedRequest.msgId}}</p> <br>
                        </v-list-item-content>
                    </v-list-item>
                    
                </v-card>
                
                <v-card-actions>
                    <button @click="showSelectedAgentDetails" class="primary">Assign an Agent
                     <select v-model="selectedAgent">
                        <option v-for="agent in agents" :value="agent" :key="agent.agentId">
                        {{ agent.firstName }} {{agent.lastName}}
                        </option>
                    </select>
                    </button>
                </v-card-actions>
                 <v-card v-if="selectedAgent"  
                    class="mx-auto my-12"
                    max-width="700" 
                    max-height="500"
                >
                    <v-card-title>Selected agent</v-card-title>
                    <v-list-item>
                        <v-list-item-avatar size='150' v-if="selectedAgent.photoPath == null">
                            <img src="@/assets/images/avatarimage.jpg" alt="">
                        </v-list-item-avatar>
                        <v-list-item-avatar size='150' v-else>
                            <img :src="selectedAgent.photoPath" alt="">
                        </v-list-item-avatar>
                        
                        <v-list-item-content>
                            <p><b>Name: </b> <span>{{selectedAgent.firstName}} {{selectedAgent.lastName}}</span></p> <br>
                            <p><b>Email: </b> {{selectedAgent.email}}</p> <br>
                            <p><b>License Number: </b> {{selectedAgent.licenseNumber}} </p><br>
                            <p><b>Adhar Number: </b> {{selectedAgent.adharNumber}}</p> <br>
                            <p><b>Passport Number: </b> {{selectedAgent.passportNumber}}</p>  <br>
                            <p><b>Phone: </b> {{selectedAgent.phone}}</p>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-card-actions>
                    <v-btn>Confirm</v-btn>
                    <v-btn @click="$router.go(-1)">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </template>
       
    </div>
</v-app>
</template>

<script>
import UserService from "@/apiservices/UserService";
import agentService from "@/apiservices/agentService";
    export default {
        
        data() {
            return {
                selectedAgent: null,
                // dialog: false,
                selectedRequest: [],
                agents: [],
                msgId: null,
                // agentSelected: null,
                // toggleButton: false,
                // agentNamesArr: [],
                // selectedAgentArr: []
            }
        },
        created() {
            this.msgId = this.$route.params.msgId;
        },
        mounted() {
            this.selectedUserRequest();
            this.showSelectedAgentDetails();
        },
        methods: {
            selectedUserRequest() {
                console.log('msgid', JSON.stringify(this.msgId))
                UserService.getSelectedRequest(JSON.stringify(this.msgId))
                    .then(response => {
                        this.selectedRequest = response.data.apiResponse;
                        console.log("Selected request", this.selectedRequest);
                    })
                    .catch(error => {
                        console.log("Error reported from endpoints (selectedUserRequest) :", error.response);
                    })
            },
            showSelectedAgentDetails() {
                agentService.getAgents()
                    .then(response => {
                        console.log('Agents: ', response.data);
                        this.agents = response.data.data;
                    })
                    .catch(error => {
                        console.log("Error from selected Agent details: ", JSON.stringify(error));
                    })
            },
           
            // getSelectedAgent(agentEmail) {
            //     agentService.getAgent(agentEmail) 
            //         .then(response => {
            //             console.log('Selected Agent email: ', this.selectedAgent.email);
            //             this.agentSelected = response.data.data;
            //             for(var i = 0; i < this.agentSelected.length; i++){
            //                 this.selectedAgentArr.push({
            //                     agentId: this.agentSelected.agentId,
            //                     name: this.agentSelected.name,
            //                     email: this.agentSelected.email,
            //                     licenseNumber: this.agentSelected.licenseNumber,
            //                     adharNumber: this.agentSelected.adharNumber,
            //                     passportNumber: this.agentSelected.passportNumber,
            //                     phone: this.agentSelected.phone
            //                 })
            //             }
            //         })
            //         .catch(error => {
            //             console.log("Error from displaying selected agent: ", JSON.stringify(error));
            //         })
            // }
         }
    }
</script>

<style lang="scss" scoped>


</style>
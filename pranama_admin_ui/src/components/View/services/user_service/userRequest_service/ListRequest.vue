<template>
<v-app data-app>
     <div>
        <h2>User Request</h2>
        <br>
        <template> 
            <v-card
                class="mx-auto"
                max-width="600"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="overline mb-2">
                    <b>{{selectedRequest.requestType}}</b>
                    </div>
                    <div v-if="selectedRequest.requestType === 'Patient Pickup'">
                        <v-card-text><b>Patient name:</b> {{ selectedRequest.patientFirstName }} {{selectedRequest.patientLastName}}</v-card-text> 
                        <v-card-text><b>Patient email:</b> {{ selectedRequest.userEmail }}</v-card-text>
                        <v-card-text><b>Pickup Location:</b> {{ selectedRequest.pickupLocation }}</v-card-text> 
                        <v-card-text><b>Drop-off Location:</b> {{ selectedRequest.dropoffLocation }}</v-card-text> 
                        <v-card-text><b>Time:</b> {{selectedRequest.time}}</v-card-text> 
                        <v-card-text><b>Vehicle:</b> {{selectedRequest.vehicle}}</v-card-text> 
                        <v-card-text><b>Phone Number:</b> {{selectedRequest.phoneNumber}}</v-card-text> 
                        <v-card-text><b>Description:</b> {{selectedRequest.description}}</v-card-text> 
                        <v-card-text><b>MsgID:</b> {{selectedRequest.msgId}}</v-card-text> 
                    </div>

                    <div v-else>
                        <v-card-text><b>Patient name:</b> {{ selectedRequest.patientFirstName }} {{selectedRequest.patientLastName}} </v-card-text>
                        <v-card-text><b>Patient email:</b> {{ selectedRequest.userEmail }} </v-card-text> 
                        <v-card-text><b>Doctor Name:</b> {{ selectedRequest.doctorName }}</v-card-text> 
                        <v-card-text><b>Hospital Name:</b> {{ selectedRequest.hospitalName }}</v-card-text> 
                        <v-card-text><b>Hospital Location:</b> {{selectedRequest.hospitalLocation}}</v-card-text> 
                        <v-card-text><b>Time:</b> {{selectedRequest.time}}</v-card-text> 
                        <v-card-text><b>Description:</b> {{selectedRequest.description}}</v-card-text> 
                        <v-card-text><b>MsgID:</b> {{selectedRequest.msgId}}</v-card-text> 
                    </div>
                
                </v-list-item-content>
                </v-list-item>
                      
                

                <v-card-actions>
                <v-btn
                    outlined
                    rounded
                    text
                    @click="toggleButton = !toggleButton; showSelectedAgentDetails"
                >
                <!-- ; showSelectedAgentDetails -->
                    Assign an Agent
                    
<!--  :menu-props="{ value: toggleButton }" -->

                    <!-- <div  v-if="toggleButton">
                        <v-select
                       
                        v-for="agent in agents" 
                        :key="agent.agentId" 
                        :value="agent"
                    >{{agent.name}}</v-select>
                    </div> -->
                    
                    
                </v-btn>
                 <v-select
                        v-if="toggleButton"
                        :items="agentNamesArr"
                       return-object
                       v-model="selectedAgent"
                        
                    ></v-select>
                    <!-- <v-select :items="agents" :reduce="agents => agents.name" label="country" v-if="toggleButton" />{{agent.name}} -->
                <v-btn
                    outlined
                    rounded
                    text
                >
                    Assign a Vehicle
                    
                </v-btn>
                </v-card-actions>
            </v-card>

        </template>

            
                <!-- <template>
                <v-row justify="center">
                    <v-dialog
                    v-model="dialog"
                    scrollable
                    max-width="300px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        class="primary"
                        v-bind="attrs"
                        v-on="on"
                        @click="showSelectedAgentDetails"
                        >
                        Assign an Agent
                        </v-btn>
                    </template>
                    <v-card>
                       <v-card-title>Select Agent</v-card-title>
                        <v-list >
                            <v-list-group 
                                v-for="agent in agents" 
                                :key="agent.agentId" 
                                :value="agent" 
                            >
                                <template v-slot:activator>
                                <v-list-item-title v-model="selectedAgent"
                                    >
                                    {{agent.name}}
                                </v-list-item-title>
                                </template>
                        
                                <v-list-item v-if="selectedAgent"> 
                                    <v-list-item-content 
                                        v-for="details in selectedAgent" 
                                        :key="details.agentId" 
                                        :value="details">
                                        {{details.name}}
                                    </v-list-item-content>
                                 </v-list-item> 
                            </v-list-group>
                        </v-list>

                    </v-card> 

                     <v-card>
                        <select v-model="selectedAgent">
                            <option v-for="agent in agents" :value="agent" :key="agent.agentId">
                            {{ agent.name }}
                            </option>
                        </select>
                         <v-card v-if="selectedAgent">
                            <v-card-title
                            v-for="details in selectedAgentArr"
                            :key="details.agentId"
                            :value="details"
                            >
                                {{details.name}} <br>
                                                          
                            </v-card-title>
                        </v-card>
                    </v-card> 
                    </v-dialog>
                </v-row>
                </template> -->


                <!-- <div v-if="selectedAgent">
                    <v-text-field
                        label="Selected Agent"
                        :value="selectedAgent"
                    >{{selectedAgent}}</v-text-field>
                    
                </div> -->
            

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
                dialog: false,
                selectedRequest: [],
                agents: [],
                msgId: null,
                agentSelected: null,
                toggleButton: false,
                agentNamesArr: []
            }
        },
        created() {
            this.msgId = this.$route.params.msgId;
        },
        mounted() {
                 this.selectedUserRequest();
                 this.showSelectedAgentDetails();
                // this. getSelectedAgent();
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
                        this.agentNamesArr = response.data.data.name;
                        console.log('Selected agent names', response.data.data.name)
                    })
                    .catch(error => {
                        console.log("Error from selected Agent details: ", JSON.stringify(error));
                    })
            },
            showCard() {
                this.openCard = !this.openCard;
            },
            getSelectedAgent() {
                agentService.getAgent(this.selectedAgent.email) 
                    .then(response => {
                        console.log('Selected Agent: ', response.data);
                        this.agentSelected = response.data.data;
                        for(var i = 0; i < this.agentSelected.length; i++){
                            this.selectedAgentArr.push({
                                agentId: this.agentSelected.agentId,
                                name: this.agentSelected.name,
                                email: this.agentSelected.email,
                                licenseNumber: this.agentSelected.licenseNumber,
                                adharNumber: this.agentSelected.adharNumber,
                                passportNumber: this.agentSelected.passportNumber,
                                phone: this.agentSelected.phone
                            })
                        }
                    })
                    .catch(error => {
                        console.log("Error from getting selected agent: ", JSON.stringify(error));
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
.dropdown-toggle, .dropdown-menu { width: 300px }
.btn-group img { margin-right: 10px }
.dropdown-toggle { padding-right: 50px }
.dropdown-toggle .glyphicon { margin-left: 20px; margin-right: -40px }
.dropdown-menu>li>a:hover { background: #f1f9fd } /* $search-blue */
.dropdown-header { background: #ccc; font-size: 14px; font-weight: 700; padding-top: 5px; padding-bottom: 5px; margin-top: 10px; margin-bottom: 5px }

</style>
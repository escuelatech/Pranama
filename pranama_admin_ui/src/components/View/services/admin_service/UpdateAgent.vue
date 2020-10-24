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
          <v-snackbar  v-model="snackbar"  top color="success" text>
            {{ agentUpdatemsg}}
            </v-snackbar>
          <h4>Edit Agent profile</h4>
          <div>
            <form @submit.prevent="agentUpdateForm" ref="agnt">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value
                    placeholder="First Name"
                    v-model="agent.firstName"
                    autocomplete="off"
                    required
                  />
                  <span class="errNotific" v-if="msge.firstName">{{
                    msge.firstName
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value
                    placeholder="Last Name"
                    v-model="agent.lastName"
                    autocomplete="off"
                    required
                  />
                  <span class="errNotific" v-if="msge.lastName">{{
                    msge.lastName
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>license Number</label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value
                    placeholder="License Number"
                    v-model="agent.licenseNumber"
                    autocomplete="off"
                    required
                  />
                  <span class="errNotific" v-if="msge.licenseNumber">{{
                    msge.licenseNumber
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>Passport Number</label>
                  <input
                    type="text"
                    name="passportNo"
                    value
                    placeholder="Passport Number"
                    v-model="agent.passportNumber"
                    autocomplete="off"
                    required
                  />
                  <span class="errNotific" v-if="msge.passportNo">{{
                    msge.passportNo
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>Adhar Number</label>
                  <input
                    type="text"
                    name="adharNo"
                    value
                    placeholder="Adhar Number"
                    v-model="agent.adharNumber"
                    autocomplete="off"
                    required
                  />
                  <span class="errNotific" v-if="msge.adharNo">{{
                    msge.adharNo
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value
                    placeholder="Email"
                    v-model="agent.email"
                    autocomplete="off"
                    required
                    readonly
                  />
                  <span class="errNotific" v-if="msge.email">{{
                    msge.email
                  }}</span>
                </div>
                <div class="col-6 col-12-xsmall">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value
                    placeholder="Phone Number xxx-xxx-xxxx"
                    v-model="agent.phone"
                    autocomplete="off"
                    required
                    readonly
                  />
                  <span class="errNotific" v-if="msge.phoneNumber">{{
                    msge.phoneNumber
                  }}</span>
                </div>
                <div class="col-8 col-13-xsmall">
                  <label>Agent photo</label>
                  <div
                    class="base-image-input"
                    ref="uploadImage"
                    :style="{ 'background-image': `url(${imageData})` }"
                    @click="chooseImage"
                  >
                    <span v-if="!imageData" class="placeholder">
                      <img height="100%" :src="agent.photoPath" alt="avatar" />
                    </span>
                    <input
                      class="file-input"
                      ref="fileInput"
                      type="file"
                      @change="onSelectFile()"
                    />
                  </div>
                </div>
              </div>

              <div class="col-12">
                <ul class="actions">
                  <li>
                    <input
                      type="submit"
                      value="Update Profile"
                      class="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                  <li>
                    <input
                      type="button"
                      value="Cancel"
                      @click="$router.push({ name: 'Dashboard' })"
                    />
                  </li>
                </ul>
              </div>
            </form>
          </div>

          <!-- Form -->
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
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
import agentService from "@/apiservices/agentService.js";

export default {
  components: { Header, Sidebar },
  data() {
    return {
      msge: [],
      formData: null,
      imageData: "",
      agent: "",
      file: "",
      agentUpdatemsg: "",
      agentEmail: "",
      snackbar:"false"
    };
  },
  created() {
    this.agentEmail = this.$route.params.agentEmail;
    console.log(this.agentEmail, "AgentEmail");
  },
  mounted() {
    this.getRegisteredAgent();
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click();
    },

    getRegisteredAgent() {
      agentService
        .getAgent(this.agentEmail).then((response) => {
          this.agent = response.data.data;
          console.log(response.data.data);
          }).catch((error) => {
          console.log("Error reported from endpoints :", error.response);
          this.isError = true;
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },

    agentUpdateForm() {
      agentService
        .updateAgent({
          email: this.agent.email,
          phoneNumber: this.agent.phone,
          firstName: this.agent.firstName,
          licenseNumber: this.agent.licenseNumber,
          lastName: this.agent.lastName,
          adharNumber: this.agent.adharNumber,
          passportNumber: this.agent.passportNumber,
          agentId: this.agent.agentId,
          photoPath: this.agent.photoPath,
        }).then((response) => {
            if(response.status===200){
               this.agentUpdatemsg='Agentprofile updated successfully';
             this.snackbar="true"  
            }
            console.log("response received in backend", JSON.stringify(response.data),
           setTimeout(() => this.$router.push({ name: "Dashboard"}),4000)
            
 
          );
        }).catch((error) => {
          console.log("Error reported from endpoints:" + error.response);
          this.displayMessage = true;
          this.isError = true;
          this.$store.dispatch("addErrorMessage");
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },
  },
  
};
</script> 

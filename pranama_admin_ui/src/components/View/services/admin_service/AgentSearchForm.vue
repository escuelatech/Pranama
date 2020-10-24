<template>
  <div>
    <div>
      <div v-show="!viewSearchBox">
        <form @submit.prevent="findRegisteredAgent">
          <header class="major">
            <h2>Agent Search</h2>
          </header>
          <div class="row gtr-uniform box">
            <div class="col-6 col-12-xsmall">
              <vue-bootstrap-typeahead
                class="mb-4"
                v-model="query"
                :data="agents"
                :serializer="(agent) => agent.email"
                @hit="
                  enableButton();
                  selectedAgent = $event;
                "
                placeholder="Search Pranama Agents"
              />
              <span class="errNotific" v-if="msge.email">{{ msge.email }}</span>
            </div>
            <!-- Break -->
            <div class="col-12">
              <ul class="actions">
                <li>
                  <input
                    type="submit"
                    value="FIND Agent"
                    class="primary"
                    :disabled="disable"
                  />
                </li>
                <li>
                  <input type="reset" value="Reset" @click="disableButton()" />
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div>
        <!---------------------------------------------------------------------------------------------------->
        <div v-show="displayAgentInfo">
          <header class="major">
            <h4>Agent Details</h4>
          </header>
            <div align="right"> 
           <ul class="icons">
           <li>
            <button class="button small" @click="displaysearchbox" >
                  Back To Search
                </button>
           </li>
           </ul>
          </div>

          <div class="box" v-show="displayAgentInfo">
            <div class="content text-justify">
              <div class="row gtr-200">
                <span class="image">
                  <img
                    height="200"
                    width="200"
                    :src="agent.photoPath"
                    alt="photo"
                /></span>
                <div >
                  <b>Agent id: </b>{{ agent.agentId }}<br />
                  <b>Name: </b>{{ agent.firstName }} {{ agent.lastName }}<br />
                  <b>Email: </b>{{ agent.email }}<br />
                  <b>Phone: </b>{{ agent.phone }}<br />
                  <b>Adhar No: </b>{{ agent.adharNumber }}<br />
                  <b>Licence No: </b>{{ agent.licenseNumber }}<br />
                  <b>Passport No: </b>{{ agent.passportNumber }}<br />
                </div>
              </div>
            </div>
            <div class="col-12">
              <ul class="actions">
                <li>
                  <input
                    type="button"
                    value="Edit Profile"
                    class="primary"
                    @click="
                      $router.push({
                        name: 'UpdateAgent',
                        params: { agentEmail: agent.email },
                      })
                    "
                  />
                </li>
              </ul>
            </div>
           </div>
         </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import agentService from "@/apiservices/agentService.js";
export default {
  data() {
    return {
      agent: "",
      msge: [],
      query: "",
      agents: [],
      displayAgentInfo: false,
      viewSearchBox: false,
      disable: true,
    };
  },
  components: {
    VueBootstrapTypeahead,
  },
  watch: {
    query() {
      agentService.getAgents().then((res) => {
        this.agents = res.data.data;
      });
    },
  },

  methods: {
    enableButton() {
      this.disable = false;
    },
    disableButton() {
      this.disable = true;
    },
    displaysearchbox(){
    
       this.$router.go();
     
    },

    findRegisteredAgent() {
      agentService.getAgent(this.query)
        .then((response) => {
          this.agent = response.data.data;
          this.viewSearchBox = true;
          this.displayAgentInfo = true;
          console.log(response.data.data);
        })
        .catch((error) => {
          console.log("Error reported from endpoints :", error.response);
          this.isError = true;
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
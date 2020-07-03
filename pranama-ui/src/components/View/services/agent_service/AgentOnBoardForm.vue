<template>
    <div>
       <h3 v-show="!agentSighUpSuccessful">Agent Sign Up</h3>
       <form @submit.prevent="submitAgentOnBoardForm" v-show="!agentSighUpSuccessful">
       <div class="row gtr-uniform">
       <div class="col-6 col-12-xsmall">
       <div class="inputIcons">
                <input type="text" name="firstName" value placeholder="First Name" v-model="firstName" required autocomplete="off"/>
                 <i class="fas fa-user" aria-hidden="true"></i>
                </div>
                <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
              <div class="inputIcons">
                <input type="text" name="lastName" value placeholder="Last Name" v-model="lastName" required autocomplete="off"/>
                <i class="fas fa-user" aria-hidden="true"></i>
                </div>
                <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
              <div class="inputIcons">
                <input type="text" name="licenseNo" value placeholder="License Number" v-model="licenseNo" required autocomplete="off"/>
                <span class="errNotific" v-if="msge.licenseNo">{{msge.licenseNo}}</span>
                <i class="fas fa-id-badge"></i>
                </div>
              </div>
              <div class="col-6 col-12-xsmall">
              <div class="inputIcons">
                <input type="text" name="passportNo" value placeholder="Passport Number" v-model="passportNo" required autocomplete="off"/>
                <i class="fas fa-passport"></i>
              </div>
                <span class="errNotific" v-if="msge.passportNo">{{msge.passportNo}}</span>
              </div>
               <div class="col-6 col-12-xsmall">
                <div class="inputIcons">
                <input type="text" name="adharNo" value placeholder="Adhar Number" v-model="adharNo" required autocomplete="off"/>
                <i class="fas fa-id-badge"></i>
                </div>
                <span class="errNotific" v-if="msge.adharNo">{{msge.adharNo}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
              <div class="inputIcons">
                <input type="email" name="email" value placeholder="Email" v-model="email" required autocomplete="off"/>
                <i class="fas fa-envelope" aria-hidden="true"></i>
              </div>
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
                <input type="text" name="phoneNumber" value placeholder="Phone Number" v-model="licenseNo" required autocomplete="off"/>
                <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
              </div>
               <div class="col-12">
                 <ul class="actions">
                    <li>
                       <input type="submit" value="Submit" class="primary" />
                    </li>
                     <li>
                    <input type="reset" value="Reset" />
                    </li>
                    <li>
                    <input type="button" value="Cancel" @click="$router.push({name: 'Pranama'})"/>
                    </li>
                </ul>
            </div>
       </div>
       </form>
    </div>
</template>

<script>

import AgentService from "@/apiservices/AgentService";
    export default {
      components:{
        
      },
      data() {
        return {
        agentSighUpSuccessful: false, 
        firstName: "",
        lastName: "",
        licenseNo: "",
        passportNo: "",
        adharNo: "",
        email:"",
        msge: []
        };  
      },
     watch: {
      email(value) {
      this.email = value;
      this.check_email(value);
       },
       firstName(value) {
       this.firstNamel = value;
       this.check_firstName(value);
       },
        lastName(value) {
      this.lastName = value;
      this.check_lastName(value);
       },
       licenseNo(value) {
      this.llicenseNo = value;
      this.check_licenseNo(value);
      },
      passportNo(value) {
      this.passportNo = value;
      this.check_passportNo(value);
      },
      adharNo(value) {
      this.adharNo = value;
      this.check_adharNo(value)
       },
      phoneNumber(value) {
      this.phoneNumber = value;
      this.check_phoneNumber(value)
       }
     },
      methods: {
        submitAgentOnBoardForm(){
          AgentService.onBoardAgent({
            email: this.email,
            phone: '17263186237',
            name: this.firstNamel,
            licenseNumber: this.llicenseNo,
            passportNumber: this.passportNo,
            adharNumber: this.adharNo,
          }).then(response =>{
              console.log(response.data);
          }).catch(error => {
            console.log("Error reported from endpoints :", error.response);
          });
        },
        check_email(value) {
            
              // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          this.msge["email"] = "";
        } else {
          this.msge["email"] = "Enter a valid email";
        }
        
        },
  
        check_firstName(value) {
        if (value == "") {
        this.msge["firstName"] = "Enter first name";
        } else {
        this.msge["firstName"] = "";
        }
        },
       check_lastName(value) {
       if (value == "") {
        this.msge["lastName"] = "Enter last name";
        } else {
        this.msge["lastName"] = "";
        }
        },
        check_licenseNo(value) {
       if (value == "") {
        this.msge["licenseNo"] = "Enter your valid Licence No.";
        } else {
        this.msge["licenseNo"] = "";
        }
        },
        check_passportNo(value) {
        if (value == "") {
        this.msge["passportNo"] = "Enter your valid Passport No.";
        } else {
        this.msge["passportNo"] = "";
       }
       },
       check_adharNo(value) {
         if (value == "") {
        this.msge["adharNo"] = "Enter your valid Adhar No.";
         } else {
        this.msge["adharNo"] = "";
         }
        }
      }
      
    };
    
</script>

<style lang="scss" scoped>

</style>
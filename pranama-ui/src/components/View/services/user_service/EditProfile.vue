<template>
    <div>
            <!-- Form -->
         <!--<div class="box" >
            <h3>{{errorMessage}}</h3>
          </div>-->
          <!-- <Errorbar/> --> 
          <h4 v-show="!EditProfileSuccessful">Edit your profile here.</h4>
          <form @submit.prevent="submitEditProfile" v-show="!EditProfileSuccessful" >
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input type="email" name="email" value placeholder="Email" v-model="email" required />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
              </div>
              
              <div class="col-6 col-12-xsmall">
                <input type="password" name="password" value placeholder="Password" v-model="password" autocomplete="off"  required />
                <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input type="text" name="firstName" value placeholder="First Name" v-model="firstName" required />
                <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input type="text" name="lastName" value placeholder="Last Name" v-model="lastName" required />
                <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phoneNumber"
                  value
                  placeholder="Phone Number xxx-xxx-xxxx"
                  v-model="phoneNumber"
                  required
                />
                <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="State"
                  value
                  placeholder="Country"
                  v-model="country"
                  required
                />
                <span class="errNotific" v-if="msge.country">{{msge.country}}</span>
              </div>
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Edit MY Profile" class="primary"  /></li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                   
                 </ul>
              </div>
            </div>
          </form>
          <div class="box" v-show="EditProfileSuccessful">
            <h3>{{EditMessage}}</h3>
          </div>
       

    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
    export default {
    data() {
     return {
      EditProfileSuccessful: false,
      email: "",
      password: "",
      firstName:"",
      lastName: "",
      phoneNumber: "",
      country: "",
      msge: [],
      min: "10",
      max: "15",
      editMessage:[],
     // errorMessage:[],
      };
     },
  
   watch: {
       email(value) {
      this.email = value;
      this.check_email(value);
      },
     password(value) {
      this.password = value;
      this.check_password(value);
      },
      firstName(value) {
      this.firstName = value;
       this.check_firstName(value);
     },
     lastName(value) {
       this.lastName = value;
      this.check_lastName(value);
      },
      country(value) {
     this.country = value;
      this.check_country(value);
      },
      phoneNumber(value) {
      this.phoneNumber = value;
       this.check_phoneNumber(value);
     }
   },
     methods: {
      submitEditProfile() {
      UserService.register({
        email: this.email,
        phoneNumber: this.phoneNumber,
        firstName: this.firstName,
        userType: this.userType,
        lastName: this.lastName,
        passWord: this.password,
        country: this.country,
        })
        .then(response => {
          response.data;
          console.log(response);
          this.userRegistrationSuccessful = true;
          // return (this.registrationMessage =
          //   "Thank you for registering with us. A verification link has been sent to your email account. Please click on the click to verify your email and continue the registration process.");
        })
        .catch(error => {
          console.log("Error reported from endpoints :", error.response);
          this.isError = true;
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
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
        check_password(value) {
         if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
        this.msge["password"] = "";
          } else {
        this.msge["password"] =
          "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
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
    
 check_country(value) {
      if (value == "") {
        this.msge["country"] = " Enter the state";
      } else {
        this.msge["country"] = "";
      }
    },
     check_phoneNumber(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.msge["phoneNumber"] = " ";
      } else {
        this.msge["phoneNumber"] = "Enter your valid Mobile Number";
      }
    },
    }
     
  };
    
</script>

<style lang="scss" >
@import "@/design/main.scss";

.errNotific {
  color: red;
}
</style>
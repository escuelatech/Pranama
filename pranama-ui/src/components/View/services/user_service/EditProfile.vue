<template>
    <div>
            <!-- Form -->
         <div v-show="isError" >
            <Messagebar />
          </div>
          <!-- <Errorbar/> --> 
          <form @submit.prevent="submitEditProfile" v-show="!editProfileSuccessful" >
            <h4>Edit Profile</h4>
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input 
                type="email" 
                name="email" 
                value 
                v-model="user.email" readonly />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
              </div>
              
              <div class="col-6 col-12-xsmall">
                <input 
                type="password" 
                name="password" 
                value 
                v-model="user.password" 
                autocomplete="off"  required />
                <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input 
                type="text" 
                name="firstName" 
                value 
                v-model="user.firstName" 
                required />
                <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input 
                type="text" 
                name="lastName" 
                value  
                v-model="user.lastName" 
                required />
                <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phoneNumber"
                  value
                  v-model="user.phoneNumber"
                  required
                />
                <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="country"
                  value
                  v-model="user.country"
                  required
                />
                <span class="errNotific" v-if="msge.country">{{msge.country}}</span>
              </div>
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Update My Profile" class="primary"  /></li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                   
                 </ul>
              </div>
            </div>
          </form>
          <div v-show="editProfileSuccessful">
            <Messagebar />
          </div>

    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
import Messagebar from '@/components/View/common/Messagebar.vue';
    export default {
      components: {
        Messagebar
      },
    data() {
     return {
      editProfileSuccessful: false,
      user: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      userType: '',
      country: '',
      msge: [],
      isError: false,
      loggedInUserEmail: JSON.parse(localStorage.getItem('email'))
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
   mounted() {
    this.getLoggedInUser();
  },
     methods: {
       getLoggedInUser() {
            UserService.getUser(this.loggedInUserEmail)
                .then(response => {
                    this.user = response.data.data;
                   }).catch(error => {
                    console.log("Error reported from endpoints :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
                });
        },
      submitEditProfile() {
      UserService.updateUser({
         email: this.user.email,
        phoneNumber: this.user.phoneNumber,
        firstName: this.user.firstName,
         userType: this.user.userType,
        lastName: this.user.lastName,
        passWord: this.user.password,
        country: this.user.country
      })
        .then(response => {
          response.data;
          console.log(response);
          console.log(this.loggedInUserEmail);
          this.users = response.data.data;
          this.editProfileSuccessful = true;
          this.isError = false;
          this.$store.dispatch('addEditMessage');
        })
        .catch(error => {
          console.log("Error reported from endpoints :", error.response);
          this.isError = true;
           this.$store.dispatch('addErrorMessage');
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
        this.msge["country"] = " Enter country";
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
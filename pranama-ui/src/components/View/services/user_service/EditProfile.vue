<template>
    <div>
      <!-- <filePreview /> -->
       <div v-show="editProfilemessage" >
        
          <Messagebar />
          <div class="messageIcons">
         <img src="https://img.icons8.com/doodle/64/000000/checkmark.png"/>
          <!--<i class="far fa-check-circle"></i>-->
          </div>
        </div>
      <div v-show="!displayEditProfile || editProfileSuccessful">
       <header class="major">
              <h2>View Profile</h2>
            </header>
            <div class="row gtr-uniform">
              <div>
                <h5><b>Name: </b>{{user.firstName}} {{ user.lastName}}</h5>
                <h5><b>Email: </b>{{user.email}}</h5>
                <h5><b>Phone Number: </b>{{user.phoneNumber}}</h5>
                <h5><b>Country: </b>{{user.country}}</h5>
              </div>
               
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="button" value="Edit My Profile" class="primary"  @click="showEditProfile" /></li>
                 </ul>
              </div>
            </div>
          </div>

            <!-- Form -->
        <div v-show="displayEditProfile">
         <div v-show="isError" >
            <Messagebar />
          </div>
          <!-- <Errorbar/> --> 
          <form @submit.prevent="submitEditProfile" v-show="!editProfileSuccessful" >
            
            <header class="major">
              <h2>Edit Profile</h2>
            </header>
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input 
                type="email" 
                name="email"  
                v-model="user.email" readonly />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
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
                v-model="user.lastName" autocomplete="off"
                required />
                <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="tel"
                  name="phoneNumber"
                  value
                  v-model="user.phoneNumber" autocomplete="off"
                  required
                />
                <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="country"
                  value
                  v-model="user.country" autocomplete="off"
                  required
                />
                <span class="errNotific" v-if="msge.country">{{msge.country}}</span>
              </div>
               
              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Update My Profile" class="primary"  /></li>
                    <li> <input type="button" value="Cancel" @click="$router.go()" /></li>
                 </ul>
              </div>
            </div>
          </form>
          <router-link v-show="!editProfileSuccessful" :to="{ name: 'resetPassword' }">Reset Password</router-link>
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
      firstName: '',
      lastName: '',
      phoneNumber: null,
      userType: '',
      country: '',
      msge: [],
      isError: false,
      loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
      displayEditProfile: false,
      editProfilemessage:false
      
      };
     },
  
   watch: {
   
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
       showEditProfile() {
                this.displayEditProfile = true;
                event.target.disabled = true
            },
       showViewProfile() {
        
         this.displayEditProfile = false;
         
       },
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
         country: this.user.country,
        
      })
        .then(response => {
          response.data;
          console.log(response);
          this.user = response.data.data;
          this.editProfileSuccessful = true;
          this.isError = false;
          this.editProfilemessage=true;
          this.$store.dispatch('addEditMessage');
          setTimeout( () => this.editProfilemessage = false,5000);
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
      var pattern = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/);
      if (pattern.test(value)) {
          this.msge["phoneNumber"] = "";
        } else {
          this.msge["phoneNumber"] = "Enter a valid phoneNumber";
        }
    },
    }
    
</script>

<style lang="scss" >
@import "@/design/main.scss";

.errNotific {
  color: red;
}

.messageIcons{
 position: relative;
  left:500px;
  top: -100px;
}
</style>
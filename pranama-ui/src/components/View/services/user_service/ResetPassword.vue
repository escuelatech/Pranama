<template>
  <div>
    <div v-show="isError" >
            <Messagebar />
          </div>
          <div class="align" v-show="!resetPasswordSuccessful">
            <header class="major">
               <h2>Reset Password</h2>
            </header>
         
        <p>Please enter your new password below. </p>
        
        <form @submit.prevent="resetPassword">
        <div class="row gtr-uniform">
         <div class="col-6 col-12-xsmall">
            <input type="password" name="currentPassword" value placeholder="Current Password" v-model="currentPassword" autocomplete="off"  required />
            <span class="errNotific" v-if="msge.currentPassword">{{msge.currentPassword}}</span>
          </div>
          <div class="col-6 col-12-xsmall"></div>
         <div class="col-6 col-12-xsmall">
            <input type="password" name="newPassword" value placeholder="New Password" v-model="newPassword" autocomplete="off"  required />
            <span class="errNotific" v-if="msge.newPassword">{{msge.newPassword}}</span>
          </div>
           <div class="col-6 col-12-xsmall"></div>
          <div class="col-6 col-12-xsmall">
            <input type="password" name="confirmNewPassword" value placeholder="Confirm New Password" v-model="confirmNewPassword" autocomplete="off"  required />
            <span class="errNotific" v-if="msge.confirmNewPassword">{{msge.confirmNewPassword}}</span>
          </div>
          <div class="col-12">
            <ul class="actions">
              <li><input type="submit" value="Reset Password" class="primary"  /></li>
            </ul>
          </div>
        </div>  
      </form>
      <div v-show="resetPasswordSuccessful">
        <Messagebar />
      </div>
      <router-link :to="{ name: 'editProfile' }">Go back to View Profile</router-link>
    </div>
          <!-- Form -->
  </div>
</template>

<script>
  import UserService from "@/apiservices/UserService";
  import Messagebar from "@/components/View/common/Messagebar.vue";
  export default {
    components: { 
        Messagebar
      },
  data(){
      return{
        resetPasswordSuccessful: false,
        // password: '',
          currentPassword: "",
           newPassword: "",
           confirmNewPassword: "",
           msge: [],
          loggedInUserEmail: JSON.parse(localStorage.getItem('email')),
          user: '',
          isError: false
      }
  },
  watch: {
     currentPassword(value) {
      this.currentPassword = value;
      this.check_currentPassword(value);
     },
    newPassword(value) {
      this.newPassword = value;
      this.check_newPassword(value);
     },
     confirmNewPassword(value) {
      this.confirmNewPassword = value;
      this.check_confirmNewPassword(value);
     }
    },
    mounted(){
      this.getLoggedInUser();
    },
    methods:{
      getLoggedInUser() {
            UserService.getUser(this.loggedInUserEmail)
                .then(response => {
                    this.user = response.data.data;
                    console.log('password', this.user.password)
                   }).catch(error => {
                    console.log("Error reported from endpoints :", error.response);
                    this.isError = true;
                    return (this.errorMessage = JSON.stringify(error.response.data.errorMessage));
                });
        },
         resetPassword() {
      UserService.updateUser({  
        password: this.newPassword
      })
        .then(response => {
          this.user.password = ''
          this.user.password = this.newPassword
          // response.data;
          // this.user.password = this.newPassword = this.confirmPassword = ''
          console.log("new password", this.password)
        console.log("response ", response);
          console.log("email displayed in reset password page ", this.loggedInUserEmail);
          this.user = response.data.data;
          console.log('After reset', this.user)
          this.resetPasswordSuccessful = true;
          this.$store.dispatch('addResetPasswordMessage');
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
        check_currentPassword(value) {
          if(value == this.user.password){
               this.msge["currentPassword"] = "";
           }
            else{
                this.msge["currentPassword"] = "Please enter your current password";
            }
        },
       check_newPassword(value) {
        if(value == this.user.password){
            this.msge["newPassword"] = "Please enter a new password";
        }
        else if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)){
          this.msge["newPassword"] = "";
        }
        else{
            this.msge["newPassword"] = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
        }
      
       },
       check_confirmNewPassword(value){
           if(value == this.newPassword){
               this.msge["confirmNewPassword"] = "";
           }
            else{
                this.msge["confirmNewPassword"] = "Both password must match.";
            }

       }
    } 
    
  }
</script>

<style lang="scss" scoped>
.align{
    margin-left:10px;
}
</style>
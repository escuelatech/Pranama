<template>
  <div>
   <div class ="row" v-show="userRegistrationSuccessful">
   <div class= "col">
  <div class= "alert show alertmsg" role="alert" >
  <Timercount ref="child"/>
   </div>
   </div>
  </div>
    <div class="box" v-show="isError">
      <h3>{{errorMessage}}</h3>
    </div>
    
    <form @submit.prevent="submitRegistrationForm();accesTimercount()" v-show="!userRegistrationSuccessful  && !displayMessage">
      <h3>Sign Up with Us</h3>
      <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
          <div class="inputIcons">
          <input type="email" name="email" value placeholder="Email" v-model="email" autocomplete="off" required />
          <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="password"
            name="password"
            value
            placeholder="Password"
            v-model="password"
            autocomplete="off"
            required
          />
           <i class="fas fa-lock" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="firstName"
            value
            placeholder="First Name"
            v-model="firstName" autocomplete="off"
            required
          />
           <i class="fas fa-user" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="lastName"
            value
            placeholder="Last Name"
            v-model="lastName" autocomplete="off"
            required
          />
           <i class="fas fa-user" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="phoneNumber"
            value
            placeholder="Phone Number xxx-xxx-xxxx"
            v-model="phoneNumber" autocomplete="off"
            required
          />
           <i class="fas fa-mobile" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input type="text" name="State" value placeholder="Country" v-model="country"  autocomplete="off" required />
           <i class="fas fa-globe" aria-hidden="true"></i>
          </div>
          <span class="errNotific" v-if="msge.country">{{msge.country}}</span>
        </div>

        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" value="Register" class="primary" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </div>
      </div>
    </form>
    <div v-show="userRegistrationSuccessful">
      <Messagebar />
    </div>
    </div>
</template>

<script>
import UserService from "@/apiservices/UserService";
import Messagebar from '@/components/View/common/Messagebar.vue';
import Timercount from "@/components/View/common/Timercount.vue";
export default {
  components: {
    Messagebar,Timercount
  },
  props: { msg: String },
  data() {
    return {
      userRegistrationSuccessful: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      userType: "",
      gender: "",
      country: "",
      msge: [],
      min: "10",
      max: "15",
      registrationMessage: [],
      errorMessage: [],
      isError: false,
      displayMessage: false
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
    submitRegistrationForm() {
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
          response;
          this.userRegistrationSuccessful = true;
          //this.displayMessage = true;
           this.isError = false;
           this.$store.dispatch('addRegMessage');
          this.timer =  setTimeout(() => this.$router.push({ name: "LoginPage"}),10000);
        })
        .catch(error => {
         this.isError = true;
          //this.displayMessage = true;
          // this.$store.dispatch('addErrorMessage')
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },
         accesTimercount(){
        this.$refs.child.countDownTimer()
       },
    check_email(value) {
      {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          this.msge["email"] = "";
        } else {
          this.msge["email"] = "Enter a valid email";
        }
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
    check_password(value) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
        this.msge["password"] = "";
      } else {
        this.msge["password"] =
          "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
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
    check_pinNumber(value) {
      // eslint-disable-next-line no-useless-escape
      for (var i = 0; i <= value.length; i++) {
        if (i == "6") {
          this.msge["pinNumber"] = " ";
        } else {
          this.msge["pinNumber"] = "Enter your 6 digit pincode";
        }
      }
    }
  },
  beforeDestroy() {
        clearTimeout(this.timer);
         
      },
};
</script>

<style lang="scss" >
@import "@/design/main.scss";
.button {
  padding: 5px;
  background-color: transparent;
  border: 1px solid #dcdcdc;
  color: #dcdcdc;
  text-decoration: none;
}
.errNotific {
  color: red;
}
.inputIcons{
  position:relative;
 }
.inputIcons i{
  position:absolute;
  left: 0px;
  top: 8px;
  padding: 9px 8px;
  transition:.3s;
  color: gray;
}
input{
   padding-left: 25px !important;
}
</style>
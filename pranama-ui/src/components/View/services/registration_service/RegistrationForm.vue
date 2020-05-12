<template>
  <div>
    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />

          <h3 v-show="!sendingSuccessful">Register here.</h3>

          <form @submit.prevent="submitRegistrationForm" v-show="!sendingSuccessful">
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="userName"
                  value="user Name"
                  placeholder="User Name"
                  v-model="userName"
                  required
                />
                <span class="errNotific" v-if="msge.userName">{{msge.userName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="password"
                  name="password"
                  value
                  placeholder="Password"
                  v-model="password"
                  autocomplete="off"
                  required
                />
                <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="firstName"
                  value
                  placeholder="First Name"
                  v-model="firstName"
                  required
                />
                <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="lastName"
                  value
                  placeholder="Last Name"
                  v-model="lastName"
                  required
                />
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
                <input type="email" name="email" value placeholder="Email" v-model="email" required />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
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

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="pincode"
                  value
                  placeholder="Pincode"
                  v-model="pinNumber"
                  required
                />
                <span class="errNotific" v-if="msge.pinNumber">{{msge.pinNumber}}</span>
              </div>

              <div class="form-check form-group">
                <input type="radio" name="gender" value="Male" id="male" v-model="gender" />
                <label for="male">Male</label>
                <input type="radio" name="gender" value="female" id="female" v-model="gender" />
                <label for="female">Female</label>
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
          <div class="box" v-show="sendingSuccessful">
            <h3>{{registrationMessage}}</h3>
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
import UserService from "@/apiservices/UserService";

export default {
  props: {
    msg: String
  },
  data() {
    return {
      sendingSuccessful: false,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      userName: "",
      gender: "",
      country: "",
      pinNumber: "",
      msge: [],
      min: "10",
      max: "15",
      registrationMessage: []
    };
  },
  components: { Header, Sidebar },
  watch: {
    email(value) {
      this.email = value;
      this.check_email(value);
    },
    userName(value) {
      this.userName = value;
      this.check_userName(value);
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
    },
    pinNumber(value) {
      this.pinNumber = value;
      this.check_pinNumber(value);
    }
  },

  methods: {
    submitRegistrationForm() {
      UserService.register({
        email: this.email,
        phone: this.phoneNumber,
        userName: this.userName,
        firstName: this.firstName,
        lastName: this.lastName,
        gender: this.gender,
        password: this.password,
        country: this.country,
        pinNumber: this.pinNumber
      })
        .then(response => {
          response.data;
          console.log(response);
          this.sendingSuccessful = true;

          if (response.status == "200") {
            return (this.registrationMessage =
              "Thank you for registering with us. You will get an email as part of this this registration.");
          } else {
            return (this.registrationMessage =
              "Sorry, there was an error. Please try again.");
          }
        })
        .catch(error => {
          this.sendingSuccessful = false;
          console.log("There was an error", error.response);
          this.sendingSuccessful = true;
        });
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
    check_userName(value) {
      if (value == "") {
        this.msge["userName"] = "Enter a valid  Name";
      } else {
        this.msge["userName"] = "";
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
  }
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
</style>
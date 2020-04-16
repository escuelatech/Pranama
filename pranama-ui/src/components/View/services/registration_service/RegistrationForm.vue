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

          <form @submit.prevent="submitContactForm" v-show="!sendingSuccessful" >
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="firstName"
                  value="First Name"
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
                  value="Last Name"
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
                  name="place"
                  value
                  placeholder="Name of the place"
                  v-model="placeName"
                  reqired
                />
                <span class="errNotific" v-if="msge.placeName">{{msge.placeName}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
                <!--  <input
                  type="text"
                  name="district"
                  value
                  placeholder="District Name"
                  v-model="districtName"
                />-->
                <select v-model="districtName">
                  <option value>- Select your District -</option>
                  <option value="Kasargod">Kasargod</option>
                  <option value="Kannur">Kannur</option>
                  <option value="Kzhikode">Kzhikode</option>
                  <option value="Wayanad<">Wayanad</option>
                  <option value="Malappuram">Malappuram</option>
                  <option value="Palakkad">Palakkad</option>
                  <option value="Thrissur">Thrissur</option>
                  <option value="Eranakulam">Eranakulam</option>
                  <option value="Alappuzha">Alappuzha</option>
                  <option value="Pathanamthitta">Pathanamthitta</option>
                  <option value="Kottayam">Kottayam</option>
                  <option value="Kollam">Kollam</option>
                  <option value="Thiruvananthapuram">Thiruvananthapuram</option>
                  <option value="Idukki">Idukki</option>
                </select>
                <span class="errNotific" v-if="msge.districtName">{{msge.districtName}}</span>
              </div>
              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="State"
                  value
                  placeholder="State Name"
                  v-model="stateName"
                  required
                />
                <span class="errNotific" v-if="msge.stateName">{{msge.stateName}}</span>
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
                <label for="female">female</label>
              </div>

              <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Register" class="primary"  /></li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                  <li>
                    <!-- <input type="btn" value="Show" v-on:click="showdata()" class="button" />-->
                    <!-- <button type="btn" name="Show"  v-on:click="showdata()" :to='{name: "RegesteredInfo"}'>show</button>-->
                  </li>
                </ul>
              </div>
            </div>
          </form>
          <div class="box" v-show="sendingSuccessful">
          <p>Registration succees!!!</p>
         <!-- <input type="reset" value="OK" class="primary" <router-view :key="$route.fullPath"></router-view> />-->
          <button type="btn" name="OK" >OK</button>
         <!-- <button @click="$router.push({name: 'RegesteredInfo', params: { id: '1' },})">View Registration</button>-->
          </div>
          <button type="btn" name="Show" :to = '{name: "RegesteredInfo"}' v-on:click="showdata()" v-show="sendingSuccessful">View Registration</button>
         
          <div>
            
            <div v-for="regData in regDatas" :key="regData.id">
            <h3 v-show="sendingSuccessful">Registered Coustomer information</h3>
           <h4> Name:{{regData.firstName}} {{regData.lastName}}</h4>
           <h4>Phone Number:{{regData.phone}}</h4>
           <h4>Address:</h4>{{regData.placeName}},
                  {{regData.districtName}},
                  {{regData.stateName}},
                  {{regData.pinNumber}}
           
            <!-- <ul>
                <li>Name:{{regData.firstName}} {{regData.lastName}}</li>
                <li>Phone Number:{{regData.phone}}</li>
                <li>
                  Address:
                  {{regData.placeName}},
                  {{regData.districtName}},
                  {{regData.stateName}},
                  {{regData.pinNumber}}
                </li>
              </ul>-->
            </div>
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
//import ContactForm from "@/components/View/ContactForm";
import axios from "axios";
const apiClient = axios.create({
  //baseURL: 'http://malabarhangouts.com',
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "content-Type": "application/json"
  }
});
export default {
  props: {
    msg: String
  },
  data() {
    return {
      sendingSuccessful: false,
      email: "",
      phoneNumber: "",
      firstName: "",
      lastName: "",
      gender: "",
      placeName: "",
      districtName: "",
      stateName: "",
      pinNumber: "",
      regDatas: [],
      msge: [],
      min: "10",
      max: "15",
      text: "sent"
      
      
    };
  },
  components: { Header, Sidebar },
  watch: {
    email(value) {
      this.email = value;
      this.check_email(value);
    },
    firstName(value) {
      this.firstName = value;
      this.check_firstName(value);
    },
    lastName(value) {
      this.lastName = value;
      this.check_lastName(value);
    },
    placeName(value) {
      this.placeName = value;
      this.check_placeName(value);
    },
    districtName(value) {
      this.districptName = value;
      this.check_districtName(value);
    },
    stateName(value) {
      this.stateName = value;
      this.check_stateName(value);
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
    submitContactForm() {
      
      apiClient
        .post("/Register", {
          //  .post("/api/email/contactus",{
          email: this.email,
          phone: this.phoneNumber,
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.gender,
          placeName: this.placeName,
          districtName: this.districtName,
          stateName: this.stateName,
          pinNumber: this.pinNumber
        })
        .then(response => {
          response.data;
          response;
         this.sendingSuccessful = true;
        })
        .catch(error => {
          this.sendingSuccessful = true;
          console.log("There was an error", error.response);
          
        });
       
   },

    showdata() {
       apiClient
         .get("/Register")
         .then(response => {
     this.regDatas = response.data;
      console.log(response);
          console.log(this.regDatas);
        })
        .catch(error => {
          console.log("There was an error", error.response);
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
    check_firstName(value) {
      if (value == "") {
        this.msge["firstName"] = "Enter a valid First Name";
      } else {
        this.msge["firstName"] = "";
      }
    },
    check_lastName(value) {
      if (value == "") {
        this.msge["lastName"] = "Enter a valid Last Name";
      } else {
        this.msge["lastName"] = "";
      }
    },
    check_placeName(value) {
      if (value == "") {
        this.msge["placeName"] = "Enter name of the place where you reside";
      } else {
        this.msge["placeName"] = "";
      }
    },
    check_districtName(value) {
      if (value == "") {
        this.msge["districtName"] = "Select the district";
      } else {
        this.msge["districtName"] = "";
      }
    },
    check_stateName(value) {
      if (value == "") {
        this.msge["stateName"] = " Enter the state";
      } else {
        this.msge["stateName"] = "";
      }
    },
    check_phoneNumber(value) {
      // eslint-disable-next-line no-useless-escape
      console.log(value);
      console.log(value.length);
      //console.log(min)
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
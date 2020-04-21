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
                  name="userName"
                  value="user Name"
                  placeholder="User Name"
                  v-model="userName"
                  required
                />
                <span class="errNotific" v-if="msge.userName">{{msge.userName}}</span>
              </div>
              
        <div class="col-6 col-12-xsmall">
          <input type="password" name="password" value placeholder="Password" v-model="password" autocomplete="off"  required />
          <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
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
         <!-- <p>Registration succees!!!</p>-->
         <p>{{m}}</p>
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
import {API} from "@/shared/index.js"
const apiClient = axios.create({
  baseURL: `${API}`,
 // baseURL: "http://localhost:3000",
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
      password: "",
      phoneNumber: "",
      userName: "",
      gender: "",
      country: "",
      pinNumber: "",
      regDatas: [],
      msge: [],
      min: "10",
      max: "15",
      m:[],
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
    password(value){
      this.password = value;
      this.check_password(value);
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
    submitContactForm() {
      
      apiClient
      
            .post("/api/user/register",{
          email: this.email,
          phone: this.phoneNumber,
          userName: this.userName,
          
          gender: this.gender,
          
          password:this.password,
          country: this.country,
          pinNumber: this.pinNumber
        })
        .then(response => {
          response.data;
         console.log(response) ;
         this.sendingSuccessful = true;
       // this.m ="Registration success!!!"
      
        if (this.status == "400"){
          return this.m =  "Registration Success!!!"
        }
        else{
             return this.m = "Oops....!!! try again"
        }

        })
        .catch(error => {
          this.sendingSuccessful = false;
          console.log("There was an error", error.response);
          this.sendingSuccessful = true;
          });
       
   },

    showdata() {
       apiClient
         .get("/api/user/register")
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
    check_userName(value) {
      if (value == "") {
        this.msge["userName"] = "Enter a valid  Name";
      } else {
        this.msge["userName"] = "";
      }
    },
    check_password(value) {
      if( /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)){
       this.msge["password"] = "";
      }
      else{
        this.msge["password"] = "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."

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
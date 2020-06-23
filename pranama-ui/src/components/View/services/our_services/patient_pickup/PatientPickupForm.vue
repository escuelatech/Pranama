<template>
  <div>
   <div class ="row" v-show="patientPickupSuccessful">
   <div class= "col">
  <div class= "alert show alertmsg" role="alert" >
  <Timercount ref="child"/>
   </div>
   </div>
  </div>
    <div v-show="isError">
      <Messagebar />
    </div>
    <form @submit.prevent="submitPatientPickupForm();accesTimercount()" v-show="!patientPickupSuccessful">
      <h3>Patient Pickup Portal</h3>
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="firstName"
            value
            placeholder="Patient First Name"
            v-model="firstName" autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="message.firstName">{{message.firstName}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="lastName"
            value
            placeholder="Patient Last Name"
            v-model="lastName" autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="message.lastName">{{message.lastName}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="pickupLocation"
            value
            placeholder="Patient's Pickup Location"
            v-model="pickupLocation"
            required autocomplete="off"
          />
          <span class="errorNotification" v-if="message.pickupLocation">{{message.pickupLocation}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="dropoffLocation"
            value
            placeholder="Patient's Drop-Off Location"
            v-model="dropoffLocation" autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="message.dropoffLocation">{{message.dropoffLocation}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="tel"
            name="phoneNumber"
            value
            placeholder="Phone Number"
            v-model="phoneNumber" autocomplete="off"
            required
          />
          <span class="errorNotification" v-if="message.phoneNumber">{{message.phoneNumber}}</span>
        </div>
        <div class="form-check form-group">
          <select id="vehicle" name="vehicle">
            <option value="default">Choose the type of vehicle</option>
            <option value="suv">SUV</option>
            <option value="sedan">Sedan</option>
          </select>
          <span class="errorNotification" v-if="message.vehicle">{{message.vehicle}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <datepicker name="date" placeholder="Date" v-model="date" required></datepicker>
          <span class="errorNotification" v-if="message.date">{{message.date}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <b-form-timepicker
            id="timepicker-placeholder"
            name="time"
            v-model="time"
            placeholder="Choose a time"
            local="en"
            required
          ></b-form-timepicker>
          <span class="errorNotification" v-if="message.time">{{message.time}}</span>
        </div>

        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" value="Submit" class="primary" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
            <li>
              <input
                type="button"
                value="Cancel"
                @click="$router.push({name : 'OurOfferedServices'})"
              />
            </li>
          </ul>
        </div>
      </div>
    </form>
    <div v-show="patientPickupSuccessful">
      <Messagebar />
    </div>
    <div  v-show="patientPickupSuccessful">
      <router-link :to="{ name: 'OurOfferedServices' }">Need Hospital assistance?</router-link>
     </div>
  </div>
</template>

<script>
import formService from "@/apiservices/formService.js";
import Datepicker from "vuejs-datepicker";
import Messagebar from "@/components/View/common/Messagebar.vue";
import Timercount from "@/components/View/common/Timercount.vue";
export default {
  data() {
    return {
      isError: false,
      patientPickupSuccessful: false,
      firstName: "",
      lastName: "",
      pickupLocation: "",
      dropoffLocation: "",
      phoneNumber: "",
      vehicle: "",
      date: "",
      time: "",
      pickupRegistrationMessage: [],
      errorMessage: [],
      message: []
    };
  },
  components: {
    Datepicker,
    Messagebar,
    Timercount
  },
  watch: {
    firstName(value) {
      this.firstName = value;
      this.validateFirstName(value);
    },
    lastName(value) {
      this.lastName = value;
      this.validateLastName(value);
    },
    pickupLocation(value) {
      this.pickupLocation = value;
      this.validatePickupLocation(value);
    },
    dropoffLocation(value) {
      this.dropoffLocation = value;
      this.validateDropoffLocation(value);
    },
    time(value) {
      this.time = value;
      this.validateTime(value);
    },
    vehicle(value) {
      this.vehicle = value;
      this.validateVehicle(value);
    },
    date(value) {
      this.date = value;
      this.validateDate(value);
    },
    phoneNumber(value) {
      this.phoneNumber = value;
      this.validatePhoneNumber(value);
    }
  },
  methods: {
    submitPatientPickupForm() {
      formService
        .submitPatientPickup({
          patientFirstName: this.firstName,
          patientLastName: this.lastName,
          pickupLocation: this.pickupLocation,
          dropoffLocation: this.dropoffLocation,
          phoneNumber: this.phoneNumber,
          vehicle: this.vehicle,
          date: this.date,
          time: this.time
        })
        .then(response => {
          console.log(response);
          this.patientPickupSuccessful = true;
          this.isError = false;
          this.$store.dispatch("addPickupAssistanceMessage");
          setTimeout(() => this.$router.push({ name: "OurOfferedServices" }),
            10000
          );
        })
        .catch(error => {
          console.log("Error reported from endpoints: ", error.response);
          this.isError = true;
          this.$store.dispatch("addErrorMessage");
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
    },
       accesTimercount(){
        this.$refs.child.countDownTimer()
       },
    validateFirstName(value) {
      if (value == "") {
        this.message["firstName"] = "Enter Patient First Name";
      } else {
        this.message["firstName"] = "";
      }
    },
    validateLastName(value) {
      if (value == "") {
        this.message["lastName"] = "Enter Patient Last Name";
      } else {
        this.message["lastName"] = "";
      }
    },
    validatePickupLocation(value) {
      if (value == "") {
        this.message["pickupLocation"] = "Enter valid location";
      } else {
        this.message["pickupLocation"] = "";
      }
    },
    validateDropoffLocation(value) {
      if (value == "") {
        this.message["dropoffLocation"] = "Enter valid location";
      } else {
        this.message["dropoffLocation"] = "";
      }
    },
    validateDate(value) {
      if (value == "") {
        this.message["date"] = "Enter valid date";
      } else {
        this.message["date"] = "";
      }
    },
    validateTime(value) {
      if (value == "") {
        this.message["time"] = "Enter valid time";
      } else {
        this.message["time"] = "";
      }
    },
    validateVehicle(value) {
      if (value == "Choose the type of vehicle") {
        this.message["vehicle"] = "Enter the type of Vehicle";
      } else {
        this.message["vehicle"] = "";
      }
    },
    validatePhoneNumber(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.message["phoneNumber"] = "";
      } else {
        this.message["phoneNumber"] = "Enter a valid Phone Number";
      }
    }
  }
};
</script>

<style lang="scss" >
@import "@/design/main.scss";
.errorNotification {
  color: red;
}
input[type="tel"] {
  border: 1px solid #ddd;
  padding: 4px 8px;
}
</style>
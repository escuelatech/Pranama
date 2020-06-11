<template>
  <div>
    <div v-show="isErrorMessage">
      <Messagebar />
    </div>
    
    <form @submit.prevent="submitHospitalAssistanceForm" v-show=" !isSuccessMessage">
      <h3>Hospital Assistance</h3>
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="PatientFirstName"
            value
            placeholder="Patients First Name"
            v-model="PatientFirstName"
            required
          />
           <span class="errorNotification" v-if="message.PatientFirstName">{{message.PatientFirstName}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="PatientLastName"
            value
            placeholder="Patients Last Name"
            v-model="PatientLastName"
            required
          />
          <span class="errorNotification" v-if="message.PatientLastName">{{message.PatientLastName}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="hospitalLocation"
            value
            placeholder="Location of hospital you want to visit"
            v-model="hospitalLocation" required
          />
          <span class="errorNotification" v-if="message.hospitalLocation">{{message.hospitalLocation}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="HospitalTobeVisit"
            value
            placeholder="Name of the Hospital you want to visit"
            v-model="hospitalTobeVisit" required
          />
          <span class="errorNotification" v-if="message.hospitalTobeVisit">{{message.hospitalTobeVisit}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="doctorNameToConsult"
            value
            placeholder="Name of the doctor you want to consult"
            v-model="doctorNameToConsult" required
          />
          <span class="errorNotification" v-if="message.doctorNameToConsult">{{message.doctorNameToConsult}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
          <datepicker
            name="date"
            placeholder="Choose the day you want to visit the doctor" 
            required v-model="date" type="text" format="dd-MM-yyyy" :v-model="date"  
          ></datepicker>
          <span class="errorNotification" v-if="message.date">{{message.date}}</span>
          {{date}}
        </div>

        <div class="col-6 col-12-xsmall">
          <b-form-timepicker
            id="timepicker-placeholder"
            name="time"
            placeholder="Choose a time"
            locale="en" v-model="time" 
            required  autocomplete="on"  
          ></b-form-timepicker>
          <span class="errorNotification" v-if="message.time">{{message.time}}</span>
         </div>
      </div>
      
      <div>
        <ul class="actions">
          <li>
            <input type="submit" value="Submit" class="primary"  />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
          <li>
            <input type="button" value="Cancel" @click="$router.push({name: 'OurOfferedServices'})" />
          </li>
        </ul>
      </div>
    </form>
     <div v-show="isSuccessMessage">
      <Messagebar />
    </div>
     </div>
</template>

<script>
import formService from "@/apiservices/formService.js";
import Datepicker from "vuejs-datepicker";
import Messagebar from "@/components/View/common/Messagebar.vue"
export default {

  data() {
    return {
      isErrorMessage: false,
      isSuccessMessage: false,
      PatientFirstName: "",
      PatientLastName: "",
      hospitalLocation: "",
      date:"",
      time:"",
      hospitalTobeVisit: "",
      doctorNameToConsult: "",
      message: [],
    };
  },
   
  components: {
   Datepicker,
   Messagebar
  },
  watch: {
    PatientFirstName(value){
      this.PatientFirstName = value;
      this.validatePatientFirstName(value);
    },
    PatientLastName(value){
      this.PatientLastName = value;
      this.validatePatientLastName(value);
    },
    hospitalLocation(value){
      this.hospitalLocation = value;
      this.validateHospitalLocation(value);
    },
    date(value){
      this.date = value;
      this.validateDate(value);
    },
    time(value){
      this.time = value;
      this.validateTime(value);
    },
     hospitalTobeVisit(value){
      this.hospitalTobeVisit = value;
      this.validateHospitalTobeVisit(value);
    },
     doctorNameToConsult(value){
      this.doctorNameToConsult = value;
      this.validateDoctorNameToConsult(value);
    },
  },
  methods: {
      submitHospitalAssistanceForm() {
      formService
        .hospitalAssistance({
          PatientFirstName: this.PatientFirstName,
          PatientLastName: this.PatientLastName,
          hospitalLocation: this.hospitalLocaon,
          hospitalTobeVisit: this.hospitalTobeVisit,
          doctorNameToConsult: this.doctorNameToConsult,
          date: new Date(this.date),
          time: this.time
        })
        .then(response => {
          response.data;
          console.log(response);
          this.isSuccessMessage = true;
          this.isErrorMessage = false;
          this.$store.dispatch('addPickupAssistanceMessage')
        })
        .catch(error => {
          console.log("Error reported from endpoints :", JSON.stringify(error.response));
          this.isErrorMessage = true;
          this.$store.dispatch('addErrorMessage')
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ))
        });
    },
  
  validatePatientFirstName(value) {
    if (value == "") {
        this.message["PatientFirstName"] = "Enter Patient First Name";
      } else {
        this.message["PatientFirstName"] = "";
      }
  },
  validatePatientLastName(value) {
    if (value == "") {
        this.message["PatientLastName"] = "Enter Patient Last Name";
      } else {
        this.message["PatientLastName"] = "";
      }
  },
  validateHospitalLocation(value) {
    if (value == "") {
        this.message["hospitalLocation"] = "Enter valid location";
      } else {
        this.message["hospitalLocation"] = "";
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
  validateHospitalTobeVisit(value) {
    if (value == "") {
        this.message["hospitalTobeVisit"] = "Enter valid Hospital Name";
      } else {
        this.message["hospitalTobeVisit"] = "";
      }
  },
  validateDoctorNameToConsult(value) {
    if (value == "") {
        this.message["doctorNameToConsult"] = "Enter Doctor Name";
      } else {
        this.message["doctorNameToConsult"] = "";
      }
  },
}
}
</script>

<style lang="scss" >
.errMsg {
  color: red;
  font: 1em sans-serif;;
  }
  .message{
     color: rgb(72, 162, 236);
     font: 1.5em sans-serif;
  }
  .box{
    margin-top:50px;
  }
  .errorNotification {
  color: red;
}
</style>
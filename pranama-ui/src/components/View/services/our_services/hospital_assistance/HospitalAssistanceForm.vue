<template>
  <div>
  <div class="box" v-if="isErrorMessage === true && isSuccessMessage === false" >
   <h4  v-show="isErrorMessage" class="errMsg">{{message}}</h4>
  </div>
   <div class="box" v-if="isSuccessMessage === true && isErrorMessage === false">
    <h3   v-show="isSuccessMessage" class="message">{{message}}</h3>
    </div>
    <div class="box" v-if="isSuccessMessage === true && isErrorMessage === true">
    <h3   v-show="isSuccessMessage" class="message">{{message}}</h3>
    </div>
   
  <!-- <Errorbar/> -->
    <h3 v-show=" !isSuccessMessage">Hospital Assistance</h3>
    <form @submit.prevent="submitHospitalAssistanceForm" v-show=" !isSuccessMessage">
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="patientFirstName"
            value
            placeholder="Patients First Name"
            v-model="patientFirstName"
            required
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="patientLastName"
            value
            placeholder="Patients Last Name"
            v-model="patientLastName"
            required
          />
        </div>

        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="hospitalLocation"
            value
            placeholder="Location of hospital you want to visit"
            v-model="hospitalLocation"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="HospitalTobeVisit"
            value
            placeholder="Name of the Hospital you want to visit"
            v-model="hospitalTobeVisit"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="doctorNameToConsult"
            value
            placeholder="Name of the doctor you want to consult"
            v-model="doctorNameToConsult"
          />
        </div>

        <div class="col-6 col-12-xsmall">
          <datepicker
            name="date"
            placeholder="Choose the day you want to visit the doctor" 
            required v-model="date" type="text" format="dd-MM-yyyy" :v-model="date"  
          ></datepicker>
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
         </div>
      </div>
      
      <div>
        <ul class="actions">
          <li>
            <input type="submit" value="Submit" class="primary"/>
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
     </div>
</template>

<script>
import formService from "@/apiservices/formService.js";
import Datepicker from "vuejs-datepicker";
export default {

  data() {
    return {
      isErrorMessage: false,
      isSuccessMessage: false,
      patientFirstName: "",
      patientLastName: "",
      hospitalLocation: "",
      date:"",
      time:"",
      hospitalTobeVisit: "",
      doctorNameToConsult: "",
      message: []
    };
  },
   
  components: {
   Datepicker
  },

  methods: {
      submitHospitalAssistanceForm() {
      formService
        .hospitalAssistance({
          patientFirstName: this.patientFirstName,
          patientLastName: this.patientLastName,
          patientLocation: this.patientLocation,
          hospitalLocation: this.hospitalLocation,
          hospitalTobeVisit: this.hospitalTobeVisit,
          doctorNameToConsult: this.doctorNameToConsult,
          date: new Date(this.date),
          time: this.time
        })
        .then(response => {
          response.data;
          console.log(response);
          this.isSuccessMessage = true
           return (this.message = "Thank you for filling out your information in  HospitalAssistance form!!! While we do our best to answer your  queries quickly, it may take about 10 hours to receive a response from us during peak hours. Incase not received any confirmation email please contact to the number provided in the contact US.Thanks in advance for your patience.  Have a great day!!! ");        
        })
        .catch(error => {
          console.log("Error reported from endpoints :", error.response);
          this.isErrorMessage = true;
          return (this.message = JSON.stringify(
            error.response.data.errorMessage
          ))
        });
    }
  }
};
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
</style>
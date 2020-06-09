<template>
  <div>
    <div v-show="isError">
      <Messagebar />
    </div>
    
    <form @submit.prevent="submitHospitalAssistanceForm" v-show=" !isSuccessMessage && !displayMessage">
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

  methods: {
      submitHospitalAssistanceForm() {
      formService
        .hospitalAssistance({
          PatientFirstName: this.PatientFirstName,
          PatientLastName: this.PatientLastName,
          PatientLocation: this.PatientLocation,
          hospitalLocation: this.hospitalLocation,
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
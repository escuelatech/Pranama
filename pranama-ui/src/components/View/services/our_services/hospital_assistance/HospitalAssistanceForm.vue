<template>
   <div>
   <div class ="row" v-show="isSuccessMessage">
   <div class= "col">
  <div class= "alert show alertmsg" role="alert" >
  <Timercount ref="child"/>
   </div>
   </div>
  </div>
    <div v-show="isErrorMessage" >
      <Messagebar />
    </div>
      <form @submit.prevent="submitHospitalAssistanceForm(); accesTimercount()" v-show=" !isSuccessMessage">
      <h3>Hospital Assistance</h3>
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="patientFirstName"
            value
            placeholder="Patients First Name"
            v-model="patientFirstName" autocomplete="off"
            required
          />
          <i class="fas fa-user" aria-hidden="true"></i>
          </div>
           <span class="errorNotification" v-if="message.PatientFirstName">
             {{message.PatientFirstName}}
             </span>
        </div>
        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="patientLastName"
            value
            placeholder="Patients Last Name"
            v-model="patientLastName" autocomplete="off"
            required
          />
         <i class="fas fa-user" aria-hidden="true"></i>
          </div>
          <span class="errorNotification" v-if="message.PatientLastName">{{message.PatientLastName}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="hospitalLocation"
            value
            placeholder="Location of hospital you want to visit"
            v-model="hospitalLocation" autocomplete="off"
            required
          />
           <i class="fas fa-location-arrow"></i>
          </div>
          <span class="errorNotification" v-if="message.hospitalLocation">{{message.hospitalLocation}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="hospitalName"
            value
            placeholder="Name of the Hospital you want to visit"
            v-model="hospitalName" autocomplete="off"
            required
          />
          <i class="fas fa-hospital-symbol"></i>
          </div>
          <span class="errorNotification" v-if="message.hospitalTobeVisit">{{message.hospitalTobeVisit}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="doctorName"
            value
            placeholder="Name of the doctor you want to consult"
            v-model="doctorName" autocomplete="off"
            required
          />
          <i class="fas fa-user-md"></i>
          </div>
          <span class="errorNotification" v-if="message.doctorNameToConsult">{{message.doctorNameToConsult}}</span>
        </div>

        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <datepicker
            name="date"
            placeholder="Choose the day you want to visit the doctor" 
            required v-model="date" 
            type="text" 
            format="dd-MM-yyyy" :v-model="date"  
          ></datepicker>
          <i class="fas fa-calendar-day"></i>
          </div>
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
       <div class="col-12">
          <textarea
            name="description"
            id="description"
            placeholder="Describe your needs"
            rows="6"
            v-model="description"
            required
          ></textarea>
          <span class="errorNotification" v-if="message.description">{{message.description}}</span>
        </div>
      
      <div>
       <div class="col-12">
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
      </div>
    </form>
     <div v-show="isSuccessMessage">
      <Messagebar />
    </div>
    <div  v-show="isSuccessMessage">
      <router-link :to="{ name: 'OurOfferedServices' }">Need a patient pickup assistance?</router-link>
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
      isErrorMessage: false,
      isSuccessMessage: false,
      patientFirstName: "",
      patientLastName: "",
      hospitalLocation: "",
      date:"",
      time:"",
      hospitalName: "",
      doctorName: "",
      description: "",
      message: [],
      };
  },
   components: {Datepicker,Messagebar,Timercount},
  
  watch: {
           
    patientFirstName(value){
      this.patientFirstName = value;
      this.validatePatientFirstName(value);
    },
    patientLastName(value){
      this.patientLastName = value;
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
     hospitalName(value){
      this.hospitalName = value;
      this.validateHospitalTobeVisit(value);
    },
     doctorName(value){
      this.doctorName = value;
      this.validateDoctorNameToConsult(value);
    },
    description(value){
      this.description = value;
      this.validateDescription(value);
    },
    
  },
  
  methods: {
      submitHospitalAssistanceForm() {
          formService.hospitalAssistance({
          patientFirstName: this.patientFirstName,
          patientLastName: this.patientLastName,
          hospitalLocation: this.hospitalLocation,
          hospitalName: this.hospitalName,
          doctorName: this.doctorName,
          date: new Date(this.date),
          time: this.time,
          description: this.description
        }) .then(response => {
          response.data;
          response;
          this.isSuccessMessage = true;
          this.isErrorMessage = false;
          this.$store.dispatch('addPickupAssistanceMessage');
          setTimeout( () => this.$router.push({ name: 'OurOfferedServices'}),10000);
          }).catch(error => {
          this.isErrorMessage = true;
          this.$store.dispatch('addErrorMessage')
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ))
      });
      },
       accesTimercount(){
        this.$refs.child.countDownTimer()
       },
      
  validatePatientFirstName(value) {
    if (value == "") {
        this.message["patientFirstName"] = "Enter Patient First Name";
      } else {
        this.message["patientFirstName"] = "";
      }
  },
  validatePatientLastName(value) {
    if (value == "") {
        this.message["patientLastName"] = "Enter Patient Last Name";
      } else {
        this.message["patientLastName"] = "";
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
        this.message["hospitalName"] = "Enter valid Hospital Name";
      } else {
        this.message["hospitalName"] = "";
      }
  },
  validateDoctorNameToConsult(value) {
    if (value == "") {
        this.message["doctorName"] = "Enter Doctor Name";
      } else {
        this.message["doctorName"] = "";
      }
  },
  validateDescription(value) {
    if (value == "") {
        this.message["description"] = "Please provide a description of your needs";
      } else {
        this.message["description"] = "";
      }
  },
  },

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
.alertmsg{
  align-items:center;
  display:block;
  background-color: rgb(132, 199, 253);
  text-align: center;
}

</style>
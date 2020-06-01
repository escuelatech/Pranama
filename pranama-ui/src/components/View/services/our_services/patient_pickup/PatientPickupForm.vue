<template>
  <div>
 
        <form @submit.prevent="submitPatientPickup" v-show="!patientPickupSuccessful">
            <h3>Patient Pickup Portal</h3>
            <div class="row gtr-uniform">
            <div class="col-6 col-12-xsmall">
                <input type="text" name="Patient First Name" value
                    placeholder="Patient First Name" v-model="firstName" required />    
            </div>
            <div class="col-6 col-12-xsmall">
                <input type="text" name="Patient Last Name" value
                placeholder="Patient Last Name" v-model="lastName" required />
                
            </div>
            <div class="col-6 col-12-xsmall">
                <input type="text" name="Patient's Current Location / Patient's Pickup Location" 
                value placeholder="Patient's Pickup Location" v-model="pickupLocation" required />
                
            </div>
            <div class="col-6 col-12-xsmall">
                <input type="text" name="Patient's Drop-Off Location" 
                value placeholder="Patient's Drop-Off Location" v-model="dropoffLocation" required />
                
            </div>
            <div class="col-6 col-12-xsmall">
                <input type="tel" name="Patient/ Contact Person's Phone Number" 
                value placeholder="Phone Number" v-model="phoneNumber" required />  
            </div>
            <div class="form-check form-group">
                <select id="vehicle" name="vehicle">
                  <option value="default">Choose the type of vehicle</option>
                  <option value="suv">SUV</option>
                  <option value="sedan">Sedan</option>
                </select>
            </div>
            <div class="col-6 col-12-xsmall">
                <datepicker name="date" placeholder="Date" required></datepicker>
            </div>
            <div class="col-6 col-12-xsmall">
                <b-form-timepicker id="timepicker-placeholder" name="time" placeholder="Choose a time" local="en" required></b-form-timepicker>
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
                    <input type="button" value="Cancel" @click="$router.push({name : 'OurOfferedServices'})"/>
                </li>
                </ul>
            </div>

            </div>
        </form>
        <div class="box" v-show="patientPickupSuccessful">
          <SuccessMessage/>
        </div>
      </div>
</template>

<script>

import formService from "@/apiservices/formService.js";
import Datepicker from "vuejs-datepicker";
//import VueTimepicker from "vue2-timepicker";
import SuccessMessage from "@/components/View/common/SuccessMessage.vue"

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
      errorMessage: []
    }
    
  },
  components: { 
    Datepicker,
    SuccessMessage
    },
    methods: {
      submitPatientPickup() {
        formService
          .submitPatientPickup({
            firstName: this.firstName,
            lastName: this.lastName,
            pickupLocation: this.pickupLocation,
            dropoffLocation: this.dropoffLocation,
            phoneNumber: this.phoneNumber,
            vehicle: this.vehicle,
            date: this.date,
            time: this.time
          })
          .then(response => {
            response.data;
            console.log(response); 
            this.patientPickupSuccessful = true;       
            })
            .catch(error => {
              console.log("Error reported from endpoints: ", error.response);
              this.isError = true;
              return (this.errorMessage = JSON.stringify(
                error.response.data.errorMessage
              ))
            });
        }
    }
};
</script>

<style lang="scss" >
@import "@/design/main.scss";
</style>
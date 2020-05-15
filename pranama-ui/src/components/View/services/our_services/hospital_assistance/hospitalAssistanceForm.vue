<template>
    <div>
     <h2 >  Hospital Assistance  </h2>
             <form @submit.prevent="submitHospitalAssistanceForm" >
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
                  name="PatientsLocation"
                  value
                  placeholder="Patient location/address"
                  v-model="PatientLocation"
                />
                </div>
                <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="PatientsContactPhoneNumber"
                  value
                  placeholder="Patient/Relative/Contact Person Phone Number"
                  v-model="PatientsContactPhoneNumber"
                />
                </div>
                <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Submit" class="primary"  /></li>
                  <li>
                    <input type="button" value="Cancel"  @click="$router.push({name: 'Dashboard'})"/>
                  </li>
                 </ul>
              </div>
              </div>
              
             </form>
    </div>
</template>

<script>
import formService from "@/apiservices/formService.js";
    export default {
        data(){
    return{
      PatientFirstName: "",
      PatientLastName: "",
      PatientLocation: "",
      PatientsContactPhoneNumber:"",
     }
  }, 
  Methods:{
      submitHospitalAssistanceForm(){
      formService
        .hospitalAssistance({
          PatientFirstName: this.PatientFirstName,
          PatientLastName: this.PatientLastName,
          PatientLocation: this.PatientLocation,
          PatientsContactPhoneNumber: this.PatientsContactPhoneNumber,
        })
        .then(() => {
         })
        .catch(error => {
          console.log("There was an error", error.response);
         });
      },
        
  }
    }
</script>

<style lang="scss" scoped>

</style>
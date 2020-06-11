<template>
  <div>
      <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Header -->
          <!-- Description -->
          <!-- <div v-show="!showPickupForm">
            <PatientPickupDescription/>
          </div> -->
          
          <!-- Description -->
          <!-- <div>
              <input type="button"  value="For Pickup Click Here" class="primary"  @click="displayPickupForm" 
              v-show="!showPickupForm" />
          </div> -->
          <!-- Form -->

          <!-- <div v-show="showPickupForm"> -->
          <div>
             <PatientPickupForm/>
          </div>
         
          <!-- Form -->
        </div>
        </div>
        <Sidebar />
    </div>
</div>
</template>

<script>
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
import PatientPickupForm from '@/components/View/services/our_services/patient_pickup/PatientPickupForm.vue';
//import PatientPickupDescription from '@/components/View/services/our_services/patient_pickup/PatientPickupDescription.vue'
export default {
    components: {
        Header,
        Sidebar,
        PatientPickupForm,
     //   PatientPickupDescription
    },
    //  data(){
    //         return {
    //             showPickupForm: false
    //         }  
    //     },
    //     methods: {
    //         displayPickupForm(){
    //             this.showPickupForm = true;
    //         }
    //     }
}
</script>
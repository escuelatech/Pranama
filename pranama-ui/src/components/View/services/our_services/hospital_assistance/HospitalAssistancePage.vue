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
          <div v-show="!showHospitalAssistanceForm">
            <HospitalAssistanceDescription/>
          </div>
          
          <!-- Description -->
          <div>
              <input type="button"  value="Register Here" class="primary"  
              @click="displayHospitalAssistanceForm" v-show="!showHospitalAssistanceForm" />
          </div>
          <!-- Form -->
          <div v-show="showHospitalAssistanceForm">
             <HospitalAssistanceForm />
          </div>
         
          <!-- Form -->
        </div>
      </div>
      <!-- Main ends -->

      <!-- Sidebar -->
      <Sidebar />
      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
  import Header from "@/components/View/common/Header";
  import Sidebar from "@/components/View/common/Sidebar";
  import HospitalAssistanceForm from "@/components/View/services/our_services/hospital_assistance/HospitalAssistanceForm.vue";
  import HospitalAssistanceDescription from "@/components/View/services/our_services/hospital_assistance/HospitalAssistanceDescription.vue"
  export default {
    components: { 
      Header, Sidebar, HospitalAssistanceForm, HospitalAssistanceDescription 
      },
      data(){
        return {
          showHospitalAssistanceForm: false
        }
      },
    methods: {
      displayHospitalAssistanceForm(){
        this.showHospitalAssistanceForm = true;
      }
    }
      
    };
</script> 

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
          <!-- Form -->
            <!-- <HospitalSearchForm/> -->
            <HospitalPage />
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
// import HospitalSearchForm from '@/components/View/services/hospital_service/HospitalSearchForm.vue'
import HospitalPage from '@/components/View/services/hospital_service/HospitalPage.vue'  
export default {
    components: { 
        Header, 
        Sidebar,  
        // HospitalSearchForm,
        HospitalPage
    }
}
</script>

<style lang="scss" scoped>

</style>
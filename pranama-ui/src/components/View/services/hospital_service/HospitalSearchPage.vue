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
            <HospitalSearchForm/>
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
import HospitalSearchForm from '@/components/View/services/hospital_service/HospitalSearchForm.vue'
  
export default {
    components: { 
        Header, 
        Sidebar,  
        HospitalSearchForm
    }
}
</script>

<style lang="scss" scoped>

</style>
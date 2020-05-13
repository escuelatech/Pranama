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
          <PatientPickupForm />
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

export default {
    components: {
        Header,
        Sidebar,
        PatientPickupForm
    }
}
</script>
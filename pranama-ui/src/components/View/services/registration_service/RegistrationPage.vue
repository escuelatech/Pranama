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
          <RegistrationForm />
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
  // import Errorbar from "@/components/View/common/Errorbar";
  import RegistrationForm from "@/components/View/services/registration_service/RegistrationForm.vue";
  export default {components: { Header, Sidebar, RegistrationForm}};
</script> 

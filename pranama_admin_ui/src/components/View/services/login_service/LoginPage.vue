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
          <LoginForm />
          <!-- <LoginVuetifyForm /> -->
          <!-- Form -->
        </div>
      </div>
      <!-- Main ends -->
    </div>
  </div>
</template>
<script>
import Header from "@/components/View/common/Header";

import LoginForm from "@/components/View/services/login_service/LoginForm";

export default {
  components: {
    Header,

    LoginForm,
  },
};
</script> 


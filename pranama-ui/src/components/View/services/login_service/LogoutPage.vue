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
          <section id="banner">
            <div class="content">
              <h2>You have successfully logged out of Pranama Dashboard</h2>
              <button @click="$router.push('/')" class="button primary">Go to Homepage</button>
            </div>
          </section>
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
  export default {components: { Header, Sidebar }};
</script> 

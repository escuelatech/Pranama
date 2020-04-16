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
          <H1>HOSPITALS</H1>
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
  
  export default {components: { Header, Sidebar,  }};
   
</script>

<style lang="scss" scoped>

</style>
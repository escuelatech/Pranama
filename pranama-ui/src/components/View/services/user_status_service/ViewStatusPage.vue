<template>
    <div>
         <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Header -->
          
        <ViewStatus />
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
import ViewStatus from '@/components/View/services/user_status_service/ViewStatus.vue';
export default {components: { Header, Sidebar, ViewStatus }};
</script>

<style lang="scss" scoped>

</style>
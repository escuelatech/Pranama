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
         <AgentOnBoardForm />
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
  import AgentOnBoardForm from "@/components/View/services/agent_service/AgentOnBoardForm.vue";
  // import Errorbar from "@/components/View/common/Errorbar";
   export default {components: { Header, Sidebar, AgentOnBoardForm}};
</script> 

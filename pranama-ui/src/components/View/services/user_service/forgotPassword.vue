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
          <h2>Forgot Password?</h2>
          <p>Please enter your e-mail address.You will receive a link to create a new password via e-mail. </p>
        <form @submit.prevent="forgotPassword">
        <div class="row gtr-uniform">
         <div class="col-6 col-12-xsmall">
                <input type="email" name="email" value placeholder="Email" v-model="email" required />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
            </div> 
            <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Get New Password" class="primary"  /></li>
                  
                  </ul>
                  </div>
            </div>  
      </form>
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
  export default {components: { Header, Sidebar},
  data(){
      return{
          email:"",
          msge: []
      }
  },
  watch: {
     email(value) {
      this.email = value;
      this.check_email(value);
     }
    },
    methods:{
       check_email(value) {
      
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          this.msge["email"] = "";
        } else {
          this.msge["email"] = "Enter a valid email";
        }
      
       }
    } 
    
  }
</script>

<style lang="scss" scoped>

</style>
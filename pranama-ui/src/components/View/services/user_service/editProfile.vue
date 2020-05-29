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
         <div class="box" >
            <h3>{{errorMessage}}</h3>
          </div>
          <!-- <Errorbar/> -->
          <h4 v-show="!EditProfileSuccessful">Edit your profile here.</h4>
          <form @submit.prevent="submitEditProfile" v-show="!EditProfileSuccessful" >
            <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input type="email" name="email" value placeholder="Email" v-model="email" required />
                <span class="errNotific" v-if="msge.email">{{msge.email}}</span>
              </div>
              
              <div class="col-6 col-12-xsmall">
                <input type="password" name="password" value placeholder="Password" v-model="password" autocomplete="off"  required />
                <span class="errNotific" v-if="msge.password">{{msge.password}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input type="text" name="firstName" value placeholder="First Name" v-model="firstName" required />
                <span class="errNotific" v-if="msge.firstName">{{msge.firstName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input type="text" name="lastName" value placeholder="Last Name" v-model="lastName" required />
                <span class="errNotific" v-if="msge.lastName">{{msge.lastName}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="phoneNumber"
                  value
                  placeholder="Phone Number xxx-xxx-xxxx"
                  v-model="phoneNumber"
                  required
                />
                <span class="errNotific" v-if="msge.phoneNumber">{{msge.phoneNumber}}</span>
              </div>

              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="State"
                  value
                  placeholder="Country"
                  v-model="country"
                  required
                />
                <span class="errNotific" v-if="msge.country">{{msge.country}}</span>
              </div>

             

                            <!-- Break -->
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Edit MY Profile" class="primary"  /></li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                   
                 </ul>
              </div>
            </div>
          </form>
          <div class="box" v-show="EditProfileSuccessful">
            <h3>{{EditMessage}}</h3>
          </div>
   
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
import Sidebar from "@/components/View/common/Sidebar.vue"
import Header from "@/components/View/common/Header.vue"
    export default {
        data() {
    return {
      EditProfileSuccessful: false,
      email: "",
      password: "",
      firstName:"",
      lastName: "",
      phoneNumber: "",
      // userName: "",
      userType: "",
      
      country: "",
     
      msge: [],
      min: "10",
      max: "15",
      editMessage:[],
      errorMessage:[],
    };
  },
  components:{Sidebar,Header}
    }
</script>

<style lang="scss" scoped>

</style>
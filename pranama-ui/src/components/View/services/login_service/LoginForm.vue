<template>
  <div>
    <h3 v-show="!sendingSuccessful">LOGIN</h3>
    <form @reset="reset" @submit.prevent="submitContactForm" v-show="!sendingSuccessful">
      <div class="row gtr-uniform">
        <template v-if="!processing">
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              name="email"
              value="Your Email"
              placeholder="Your Email"
              v-model="email" autocomplete="off"
            />
          </div>
          <div class="col-6 col-12-xsmall"></div>
          <div class="col-6 col-12-xsmall">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              v-model="password" autocomplete="off"
            />
          </div>
          <div class="col-12">
             <small><router-link :to="{ name: 'forgotPassword' }">Forgot password</router-link></small>
          </div>
        </template>
        <div v-else class="col-6 col-12-xsmall loading">
          <Spinner :centered="true" size="80" />
        </div>
        <!-- Break -->
        
        <div class="col-12">
          <div class="errNotific" v-if="error">Wrong Credentials</div>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" :disabled="processing" value="Login" class="primary" />
            </li>
            <li>
              <input type="reset" :disabled="processing" value="Cancel" />
            </li>
          </ul>
        </div>
        <div class="col-12">
          <small>Don't have an account? <router-link :to="{ name: 'RegistrationPage' }">Sign Up</router-link></small><br/>
          </div>
        <!-- <div  v-if="sendingSuccessful"> Successs </div>  -->
        <!-- <div   v-show="firstName"></div> -->
      </div>
    </form>
  </div>
</template>
<script>
import Spinner from "@/components/UI/Spinner";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      sendingSuccessful: false,
      email: "",
      password: "",
      error: false,
      processing: false,
      isAuthenticated: "",
       message: []
    };
  },
  components: {
    Spinner
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    reset() {
      this.email = "";
      this.password = "";
      this.error = false;
    },
    async submitContactForm() {
      this.error = false;
      this.processing = true;
      try {
        await this.login({
          email: this.email,
          password: this.password
        });
        this.sendingSuccessful = true;
        this.$router.push({ name: "Dashboard" }).catch(err => console.log(err));
      } catch (error) {
       // this.sendingSuccessful = false;
           console.log("Error reported from endpoints :", error.response);
           this.error = true;
          return (this.message = JSON.stringify(
            error.response.data.errorMessage
          ))
      } finally {
        this.processing = false;
      }
    }
  }
};
</script> 

<style lang="scss" >
@import "@/design/sass/main.scss";
.errNotific {
  color: red;
}
.loading {
  min-height: 170px;
  position: relative;

  .spinner {
    left: 20%;
  }
}
</style>
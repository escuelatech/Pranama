<template>
  <div>
    <h3 v-show="!sendingSuccessful">LOGIN</h3>
    <form
      @reset="reset"
      @submit.prevent="submitLoginForm"
      v-show="!sendingSuccessful"
    >
      <div class="row gtr-uniform">
        <template v-if="!processing">
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              name="email"
              value="Your Email"
              placeholder="Your Email"
              autocomplete="off"
              v-model="email"
            />
          </div>
          <div class="col-6 col-12-xsmall"></div>
          <div class="col-6 col-12-xsmall">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="off"
              v-model="password"
            />
          </div>
          <div class="col-12">
            <small
              ><router-link :to="{ name: 'forgotPassword' }"
                >Forgot password</router-link
              ></small
            >
          </div>
        </template>
        <div v-else class="col-6 col-12-xsmall loading">
          <Spinner :centered="true" size="80" />
        </div>
        <!-- Break -->
        <div class="col-12">
          <div class="errNotific" v-if="error">Wrong credentials</div>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input
                type="submit"
                :disabled="processing"
                value="Login"
                class="primary"
              />
            </li>
            <li>
              <input type="reset" :disabled="processing" value="Cancel" />
            </li>
          </ul>
        </div>
        <div class="col-12">
          <small
            >Don't have an account?
            <router-link :to="{ name: 'RegistrationPage' }"
              >Sign Up</router-link
            ></small
          ><br />
        </div>
      </div>
    </form>
    <SocialLogin/>
  </div>
</template>
<script>

import SocialLogin from "@/components/View/services/login_service/GoogleLogin.vue";
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
    };
  },
  components: {
    Spinner,SocialLogin
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
    async submitLoginForm() {
      this.error = false;
      this.processing = true;
      try {
        await this.login({
          email: this.email,
          password: this.password,
          socialLogin:"false"
        });
        this.sendingSuccessful = true;
        this.$router.push({ name: "Dashboard" }).catch((err) => console.log(err));
      } catch (error) {
        this.sendingSuccessful = false;
        this.error = true;
      } finally {
        this.processing = false;
      }
    },
  },
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
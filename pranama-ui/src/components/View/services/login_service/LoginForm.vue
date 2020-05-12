<template>
  <div>
    <h3 v-show="!sendingSuccessful">LOGIN</h3>
    <form @reset="reset" @submit.prevent="submitContactForm" v-show="!sendingSuccessful">
      <div class="row gtr-uniform">
        <template v-if="!processing">
          <div class="col-6 col-12-xsmall">
            <input
              type="text"
              name="username"
              value="User Name"
              placeholder="User Name"
              v-model="username"
            />
          </div>
          <div class="col-6 col-12-xsmall"></div>
          <div class="col-6 col-12-xsmall">
            <input 
              type="password"
              name="password"
              placeholder="Password"
              v-model="password"
            />
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
              <input type="submit" :disabled="processing" value="Login" class="primary" />
            </li>
            <li>
              <input type="reset" :disabled="processing" value="Cancel" />
            </li>
          </ul>
        </div>
        <div class="col-12">
          <small>Don't have an account? <router-link :to="{ name: 'RegistrationPage' }">Register now</router-link></small><br/>
          <small><router-link to="/">Forgot password</router-link></small>
        </div>
        <!-- <div  v-if="sendingSuccessful"> Successs </div>  -->
        <!-- <div   v-show="firstName"></div> -->
      </div>
    </form>

    <!-- hidden Div Starts -->
    <div v-show="sendingSuccessful">
      <!-- <h3>Pranama</h3> -->
      <div class="box">
        <p>
          We received your email, our team will reach out to you as soon as possible . Felis sagittis eget tempus primis in faucibus vestibulum.
          Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget.
          tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.
        </p>
      </div>
      <!-- Section -->
      <section v-show="sendingSuccessful">
        <header class="major">
          <h2>What we do</h2>
        </header>
        <div class="features">
          <article>
            <span class="icon fa-gem"></span>
            <div class="content">
              <h3>Portitor ullamcorper</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-paper-plane"></span>
            <div class="content">
              <h3>Sapien veroeros</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-rocket"></span>
            <div class="content">
              <h3>Quam lorem ipsum</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
          <article>
            <span class="icon solid fa-signal"></span>
            <div class="content">
              <h3>Sed magna finibus</h3>
              <p>
                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
    <!-- hidden Div Ends -->
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
      phoneNumber: "",
      firstName: "",
      lastName: "",
      message: "",
      text: "sent",
      username: "",
      password: "",
      error: false,
      processing: false
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
      this.username = "";
      this.password = "";
      this.error = false;
    },
    async submitContactForm() {
      this.error = false;
      this.processing = true;
      try {
        await this.login({
          username: this.username,
          password: this.password
        });
        this.sendingSuccessful = true;
        this.$router.push({ name: "Dashboard" }).catch(err => console.log(err));
      } catch (error) {
        this.sendingSuccessful = false;
        this.error = true;
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
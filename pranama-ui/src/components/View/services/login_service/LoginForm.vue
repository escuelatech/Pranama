<template>
  <div>
    <h3 v-show="!sendingSuccessful">LOGIN</h3>
    <form @submit.prevent="submitContactForm" v-show="!sendingSuccessful">
      <div class="row gtr-uniform">
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

        <!-- Break -->
        <div class="col-12">
          <div class="errNotific" v-if="error">Wrong credentials</div>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" value="Login" class="primary" />
            </li>
            <li>
              <input type="reset" value="Cancel" />
            </li>
          </ul>
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
      error: false
    };
  },

  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submitContactForm() {
      this.error = false;
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
</style>
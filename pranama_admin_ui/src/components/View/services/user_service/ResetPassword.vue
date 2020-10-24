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
          <div>
            <div class="align">
              <h2>Reset your password.</h2>
              <p>Please enter your new password below.</p>
            </div>
            <form @submit.prevent="resetPassword">
              <div class="col-6 col-12-xsmall">
                <input
                  type="password"
                  name="new password"
                  value
                  placeholder="New Password"
                  v-model="newpassword"
                  autocomplete="off"
                  required
                />
                <span class="errNotific" v-if="msge.newpassword">{{
                  msge.newpassword
                }}</span>
              </div>
              <div class="col-6 col-12-xsmall">
                <input
                  type="password"
                  name="confirmnewpassword"
                  value
                  placeholder="Confirm New Password"
                  v-model="confirmnewpassword"
                  autocomplete="off"
                  required
                />
                <span class="errNotific" v-if="msge.confirmnewpassword">{{
                  msge.confirmnewpassword
                }}</span>
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li>
                    <input
                      type="submit"
                      value="Reset Password"
                      class="primary"
                    />
                  </li>
                </ul>
              </div>
            </form>
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
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
export default {
  components: { Header, Sidebar },
  data() {
    return {
      newpassword: "",
      confirmnewpassword: "",
      msge: [],
    };
  },
  watch: {
    newpassword(value) {
      this.newpassword = value;
      this.check_newpassword(value);
    },
    confirmnewpassword(value) {
      this.confirmnewpassword = value;
      this.check_confirmnewpassword(value);
    },
  },
  methods: {
    check_newpassword(value) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(value)) {
        this.msge["newpassword"] = "";
      } else {
        this.msge["newpassword"] =
          "6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.";
      }
    },
    check_confirmnewpassword(value) {
      if (value == this.newpassword) {
        this.msge["confirmnewpassword"] = "";
      } else {
        this.msge["confirmnewpassword"] = "Both password must match.";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.align {
  margin-left: 10px;
}
</style>
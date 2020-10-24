<template>
  <div>
    <v-snackbar v-model="snackbar" top color="rgba(15, 116, 235)" text>
      {{ agentAddSuccessmsg }}
    </v-snackbar>
    <h4 v-show="!agentSignUpSuccessful">Add An Agent</h4>
    <form
      @submit.prevent="agentSignUpForm"
      v-show="!agentSignUpSuccessful"
      ref="form"
    >
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="firstName"
            value
            placeholder="First Name"
            v-model="firstName"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.firstName">{{
            msge.firstName
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="lastName"
            value
            placeholder="Last Name"
            v-model="lastName"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.lastName">{{
            msge.lastName
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="licenseNo"
            value
            placeholder="License Number"
            v-model="licenseNo"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.licenseNo">{{
            msge.licenseNo
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="passportNo"
            value
            placeholder="Passport Number"
            v-model="passportNo"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.passportNo">{{
            msge.passportNo
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="adharNo"
            value
            placeholder="Adhar Number"
            v-model="adharNo"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.adharNo">{{ msge.adharNo }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="email"
            name="email"
            value
            placeholder="Email"
            v-model="email"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.email">{{ msge.email }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="phoneNumber"
            value
            placeholder="Phone Number xxx-xxx-xxxx"
            v-model="phoneNumber"
            autocomplete="off"
            required
          />
          <span class="errNotific" v-if="msge.phoneNumber">{{
            msge.phoneNumber
          }}</span>
        </div>
        <div class="col-6 col-12-xsmall">
          <label>Upload agent photo </label>
          <div
            class="base-image-input"
            ref="uploadImage"
            :style="{ 'background-image': `url(${imageData})` }"
            @click="chooseImage"
          >
            <span v-if="!imageData" class="placeholder">
              <img
                height="100%"
                src="@/assets/images/avatar2.jpg"
                alt="avatar"
              />
            </span>
            <input
              class="file-input"
              ref="fileInput"
              type="file"
              @change="onSelectFile()"
            />
          </div>
        </div>
      </div>

      <div class="col-12">
        <ul class="actions">
          <li>
            <input type="submit" value="Submit" class="primary" />
          </li>
          <li>
            <input type="reset" value="Reset" />
          </li>
          <li>
            <input
              type="button"
              value="Cancel"
              @click="$router.push({ name: 'Dashboard' })"
            />
          </li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import agentService from "@/apiservices/agentService.js";
import fileUploadService from "@/apiservices/fileuploadService.js";
export default {
  data() {
    return {
      agentSignUpSuccessful: false,
      firstName: "",
      lastName: "",
      licenseNo: "",
      passportNo: "",
      adharNo: "",
      email: "",
      phoneNumber: "",
      msge: [],
      formData: null,
      isError: false,
      imageData: "",
      agent: "",
      file: "",
      snackbar: false,
      agentAddSuccessmsg: "Agent added successfully",
    };
  },
  watch: {
    phoneNumber(value) {
      this.phoneNumber = value;
      this.check_phoneNumber(value);
    },
    email(value) {
      this.email = value;
      this.check_email(value);
    },
    firstName(value) {
      this.firstNamel = value;
      this.check_firstName(value);
    },
    lastName(value) {
      this.lastName = value;
      this.check_lastName(value);
    },

    passportNo(value) {
      this.passportNo = value;
      this.check_passportNo(value);
    },
    adharNo(value) {
      this.adharNo = value;
      this.check_adharNo(value);
    },
    licenseNo(value) {
      this.licenseNo = value;
      this.check_licenseNo(value);
    },
  },
  methods: {
    agentSignUpForm() {
      agentService
        .addAnAgent({
          firstName: this.firstName,
          lastName: this.lastName,
          licenseNumber: this.licenseNo,
          passportNumber: this.passportNo,
          adharNumber: this.adharNo,
          email: this.email,
          phone: this.phoneNumber,
        })
        .then((response) => {
          this.agent = response.data.data;
          console.log(JSON.stringify(response));
          fileUploadService.upload(this.formData, this.email);
          this.snackbar = true;
          this.agentSuccessmsg = response.data.data;
          console.log("for msg" + this.agentSuccessmsg);
        })
        .catch((error) => {
          console.log("Error reported from endpoints:" + error.response);
          this.displayMessage = true;
          this.isError = true;
          this.$store.dispatch("addErrorMessage");
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        });
      this.$refs.form.reset();
    },

    chooseImage() {
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(files[0]);
        this.$emit("input", files[0]);
      }
      this.file = this.$refs.fileInput.files[0];
      this.formData = new FormData();
      this.formData.append("file", this.file);
    },
    check_phoneNumber(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.msge["phoneNumber"] = " ";
      } else {
        this.msge["phoneNumber"] = "Enter your valid Mobile Number";
      }
    },

    check_email(value) {
      // eslint-disable-next-line no-useless-escape
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msge["email"] = "";
      } else {
        this.msge["email"] = "Enter a valid email";
      }
    },

    check_firstName(value) {
      if (value == "") {
        this.msge["firstName"] = "Enter first name";
      } else {
        this.msge["firstName"] = "";
      }
    },
    check_lastName(value) {
      if (value == "") {
        this.msge["lastName"] = "Enter last name";
      } else {
        this.msge["lastName"] = "";
      }
    },
    check_licenseNo(value) {
      if (value == "") {
        this.msge["licenseNo"] = "Enter your valid Licence No.";
      } else {
        this.msge["licenseNo"] = "";
      }
    },
    check_passportNo(value) {
      if (value == "") {
        this.msge["passportNo"] = "Enter your valid Passport No.";
      } else {
        this.msge["passportNo"] = "";
      }
    },
    check_adharNo(value) {
      if (value == "") {
        this.msge["adharNo"] = "Enter your valid Adhar No.";
      } else {
        this.msge["adharNo"] = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
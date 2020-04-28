
<template>
  <div>
    <!-- <v-app>
      <v-app-bar app color="primary" dark>
        <h2>PRANAMA</h2>
      </v-app-bar>

      <v-layout col class="mb-6" align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card>
            <h3>Contact</h3>

            <v-card-text>
              <v-form @submit.prevent="submitContactForm" v-model="isValid">
                <v-text-field label="Name" class="input" v-model="name" :rules="nameRules" required></v-text-field>
                <v-text-field  label="Email" v-model="email" :rules="emailRules" error-count="2" class="input" required ></v-text-field>
                <v-text-field
                  label="Phone Number"
                  v-model="number"
                  :rules="[numberRule]"
                  error-count="2"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" type="button" :disabled="!isValid" @click="submitForm">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-app>-->
    <!-- http://localhost:8090/escuela/email/contactus -->

    <form @submit.prevent="submitContactForm">
      <!-- <input type="text"   v-model="name" /> -->
      From
      <input type="text" v-model="from" name="from" />
      NUmber
      <input type="text" v-model="number" name="number" />
      Subject
      <input type="text" v-model="subject" name="subject" />
      Content
      <input type="text" v-model="content" name="content" />
      <input type="submit" />
    </form>
  </div>
</template>

<script>

import EmailService from "@/apiservices/malabar/EmailService";

export default {
  data() {
    return {
      from: "",
      number: "",
      subject: "",
      content: ""
    };
  },
  methods: {
    submitContactForm() {
      console.log("Ready to submit the contact form ");
      EmailService
        .sendEmail({
          from: "shyam_ramath@yahoo.com",
          to: this.from,
          subject: this.subject,
          content: this.content
        })
        .then(response => {
          console.log(response);
          // return response;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script> 

<style  scoped>
</style>

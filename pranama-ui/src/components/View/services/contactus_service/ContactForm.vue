<template>
  <div>
    <!-- Section -->
		<section v-show="!displaySubmit">
				<header class="major">
										<h2>Get in touch</h2>
				</header>
					<p>You can easily reach us through any of the below communication mediums .</p>
          <p>
            For quick communications <a href="https://chat.whatsapp.com/DRmsRhXxa9vA6AzqUkPu5F" target="_blank">Join our watsapp Group</a>
          </p>
          <div class="row gtr-uniform">
            <div class="col-6 col-12-xsmall">
                <h3>India</h3>
                  <ul class="contact">
                          <li class="icon solid fa-envelope"><a href="#contactForm" @click="displaySubmitForm">
                           Click here to write an E-mail</a>
                          </li>
                          <li class="icon solid fa-phone"> +91 94478 89911</li>
                          <li class="icon solid fa-phone"> +91 95390 46750</li>

                          <li class="icon solid fa-home">“Sreehari” Post Puthiyara,<br />
                          Kerala, India, PIN 673004</li>
                  </ul>
            </div>
            </div> 
		</section>
   
    <br/><br/>
    <h3 v-show="!sendingSuccessful && displaySubmit">Lets us Talk - Drop an email, we will get back ! </h3>
    <form @submit.prevent="submitContactForm" 
      v-show="!sendingSuccessful && displaySubmit" 
      id="contactForm">
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
         <div class="inputIcons">
          <input
            type="text"
            name="name"
            value="Your Name"
            placeholder="Full Name"
            v-model="name" autocomplete="off"
            required
          /> 
          <i class="fas fa-user" aria-hidden="true"></i>
          </div>
          <span class="errorNotification" v-if="msg.name">{{msg.name}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
        <div class="inputIcons">
          <input
            type="text"
            name="watsappNumber"
            value="Watsapp number"
            placeholder="Watsapp Number"
            v-model="watsappNumber" autocomplete="off"
            required
          />
            <i class="fab fa-whatsapp" ></i>
          </div>
           <span class="errorNotification" v-if="msg.watsappNumber">{{msg.watsappNumber}}</span>
         
        </div>
        <div class="col-6 col-12-xsmall"> 
         <div class="inputIcons">
          <input
            type="text"
            name="phoneNumber"
            value
            placeholder="Phone Number"
            v-model="phoneNumber" autocomplete="off"
            required
          />
          <i class="fas fa-mobile" aria-hidden="true"></i>
          </div>
          <span class="errorNotification" v-if="msg.phoneNumber">{{msg.phoneNumber}}</span>
        </div>
        <div class="col-6 col-12-xsmall">
         <div class="inputIcons">
          <input type="email" name="email" value placeholder="Email" v-model="email" required autocomplete="off" />
          <i class="fas fa-envelope" aria-hidden="true"></i>
          </div>
          <span class="errorNotification" v-if="msg.email">{{msg.email}}</span>
        </div>

        <!-- Break -->
        <div class="col-12">
          <textarea
            name="message"
            id="message"
            placeholder="Let us know what assistance you are looking for"
            rows="6"
            v-model="message"
            required
          ></textarea>
          <span class="errorNotification" v-if="msg.message">{{msg.message}}</span>
        </div>
        <!-- Break -->
        <div class="col-12">
          <ul class="actions">
            <li>
              <input type="submit" value="Send Message" class="primary" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </ul>
        </div>
      </div>
    </form>

    <!-- hidden Div Starts -->
    <div v-show="sendingSuccessful">
        <Messagebar />
    </div>
      
      <!-- Section
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
      </section> -->
    <!-- hidden Div Ends -->
  </div>
</template>
<script>
import ContactService from "@/apiservices/ContactService";
import Messagebar from '@/components/View/common/Messagebar.vue';

export default {
  components: {
    Messagebar
  },
  data() {
    return {
      sendingSuccessful: false,
      email: "",
      watsappNumber: "",
      phoneNumber: "",
      name: "",
      message: "",
      text: "sent",
      displaySubmit: false,
      msg: []
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    phoneNumber(value) {
      this.phoneNumber = value;
      this.validatePhoneNumber(value);
    },
    name(value) {
      this.name = value;
      this.validateName(value);
    },
    message(value) {
      this.message = value;
      this.validateMessage(value);
    },
    watsappNumber(value) {
      this.watsappNumber = value;
      this.validateWatsappNumber(value);
    }
  },
  methods: {
    displaySubmitForm() {
      this.displaySubmit = true;
    },
    submitContactForm() {
         ContactService
        .submitContact({
          email: this.email,
          phone: this.phoneNumber,
          firstName: this.firstName,
          message: this.message,
          watsappNumber: this.watsappNumber
        })
        .then(response => {
          response.data;
          response;
          this.sendingSuccessful = true;
          this.$store.dispatch('addContactSuccessMessage')
          return response;
        })
        .catch(error => {
          this.sendingSuccessful = false;
          error;
        });
    },
    validateEmail(value) {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
          this.msg["email"] = "";
        } else {
          this.msg["email"] = "Enter a valid email";
        }
    },
    validatePhoneNumber(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.msg["phoneNumber"] = " ";
      } else {
        this.msg["phoneNumber"] = "Enter a valid Phone Number";
      }
    },
    validateWatsappNumber(value) {
      if (value.length >= "10" && value.length <= "15") {
        this.msg["watsappNumber"] = " ";
      } else {
        this.msg["watsappNumber"] = "Enter a valid Phone Number";
      }
    },
    validateName(value) {
       if (value == "") {
        this.msg["name"] = "Enter Full Name";
      } else {
        this.msg["name"] = "";
      }
    },
    validateMessage(value) {
       if (value == "") {
        this.msg["message"] = "Enter your message here";
      } else {
        this.msg["message"] = "";
      }
    }
  }
};
</script> 

<style lang="scss" >
@import "@/design/sass/main.scss";
.errorNotification {
  color: red;
}
</style>
<template>
  <div>
    <!-- Section -->
		<section>
				<header class="major">
										<h2>Get in touch</h2>
				</header>
					<p>You can easily reach us through any of the below communication mediums .</p>
          <div class="row gtr-uniform">
          <div class="col-6 col-12-xsmall">
          <h3>India</h3>
									<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#">info@pranama.in</a></li>
										<li class="icon solid fa-phone"> (515) 012-2121</li>
										<li class="icon solid fa-home">“Sreehari” Post Puthiyara,<br />
										Kerala, India, PIN 673004</li>
									</ul>
                  </div>
                  <div class="col-6 col-12-xsmall">
                  <h3>US</h3>
									<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#">info@pranama.us</a></li>
										<li class="icon solid fa-phone"> (515) 012-2121</li>
										<li class="icon solid fa-home">12345 Texas Avenue<br />
										Austin,Texas, PIN 78759</li>
									</ul>
                  </div>
                  </div>
		</section>
   
    <br/><br/>
    <h3 v-show="!sendingSuccessful">Lets us Talk - Drop an email, we will get back ! </h3>
    <form @submit.prevent="submitContactForm" v-show="!sendingSuccessful">
      <div class="row gtr-uniform">
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="firstName"
            value="Your Name"
            placeholder="First Name & Last Name"
            v-model="firstName"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="Watsappnumber"
            value="Watsapp number"
            placeholder="Watsapp Number"
            v-model="Watsappnumber"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input
            type="text"
            name="phoneNumber"
            value
            placeholder="Phone Number"
            v-model="phoneNumber"
          />
        </div>
        <div class="col-6 col-12-xsmall">
          <input type="email" name="email" value placeholder="Email" v-model="email" />
        </div>

        <!-- Break -->
        <div class="col-12">
          <textarea
            name="message"
            id="message"
            placeholder="Let us know what assistance you are looking for"
            rows="6"
            v-model="message"
          ></textarea>
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
import ContactService from "@/apiservices/ContactService";

export default {
  data() {
    return {
      sendingSuccessful: false,
      email: "",
      phoneNumber: "",
      firstName: "",
      // lastName: "",
      message: "",
      text: "sent"
    };
  },
 
  methods: {
    submitContactForm() {
      console.log("Ready to submit the contact form  ");
      //console.log(API);
      ContactService
        .submitContact({
          email: this.email,
          phone: this.phoneNumber,
          firstName: this.firstName,
          // lastName: this.lastName,
          message: this.message
        })
        .then(response => {
          console.log(response.data);
          console.log(response);
          this.sendingSuccessful = true;
          return response;
        })
        .catch(error => {
          this.sendingSuccessful = false;
          console.log(error);
        });
    }
  }
};
</script> 

<style lang="scss" >
@import "@/design/sass/main.scss";
</style>
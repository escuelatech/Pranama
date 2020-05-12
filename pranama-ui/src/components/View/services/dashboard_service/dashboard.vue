<template>
  <div>
    <!-- <html>
	<head>
		<title>Editorial by HTML5 UP</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
	</head>
    <body class="is-preload">-->

    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Banner -->
         <section>
					
          <div v-show="!pickupSuccess">
					<!-- Content -->
					<h2 id="content" v-show="!hospitalAssitanceSuccessfull "  > Pranama User Dashboard </h2>
					<p  v-show="!hospitalAssitanceSuccessfull"> Welcome to Dashboard services, please select your service you are looking for and submit a request </p>
         
					<div class="row"  v-show="!hospitalAssitanceSuccessfull" >
						<div class="col-4 col-12-medium">
							<h3>Hospital Assistance</h3>

							<p>We offer Hospital assistance for the patients.</p>
              <!-- <input type="button" value="Click for Assistance" @click="assistanceButton" v-show="!assistanceSuccess"> -->
							<p >We offer Hospital assistance for the patients.</p>
              <input type="button" value="Click for Assitance" v-show="!hospitalAssitanceSuccessfull" @click="ShowHospitalForm"/>
						</div>
           
						<div class="col-4 col-12-medium">
							<h3>Ayurveda Treatment</h3>
							<p>Ayurveda is the 5th Veda needed for health, the traditional natural, healing system, 
                practiced in India for more than 5000 years. Ayurveda derives the name from the Sanskrit words, “ayur” “veda”. 
                Ayur means life and longevity. So Ayurveda is the science of Healthy life. For healthy life we need balanced diet, healthy lifestyle and harmonious mind Ayurvedic Therapies Panchakarma We are associated with few Ayurveda hospitals for Rejnuvation treatments like Panchakarma. 
                If needed treatment options also can arranged..</p>
						</div>
						<div class="col-4 col-12-medium">
							<h3>Patient Pick up</h3>
							<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
								integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
								lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.</p>
              <!-- <input type="button" value="Click for Pickup" @click="pickupButton" v-show="!pickupSuccess"> -->
						</div>
					</div>
          </div>

          
            <form @submit.prevent="submitPatientPickup" v-show="pickupSuccess">
              <h3>Patient Pickup Portal</h3>
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="Patient First Name" value
                      placeholder="Patient First Name" v-model="firstName" />    
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="Patient Last Name" value
                    placeholder="Patient Last Name" v-model="lastName" />
                    
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="Patient's Current Location / Patient's Pickup Location" 
                    value placeholder="Patient's Pickup Location" v-model="pickupLocation" />
                    
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="text" name="Patient's Drop-Off Location" 
                    value placeholder="Patient's Drop-Off Location" v-model="dropoffLocation" />
                    
                </div>
                <div class="col-6 col-12-xsmall">
                  <input type="tel" name="Patient/ Contact Person's Phone Number" 
                    value placeholder="Phone Number" v-model="phoneNumber" />  
                </div>
                <div class="form-check form-group">
                  <p>Type of Vehicle</p>
                  <input type="radio" name="vehicle" value="Sedan" id="sedan" v-model="vehicle" />
                  <label for="sedan">Sedan</label>
                  <input type="radio" name="vehicle" value="SUV" id="suv" v-model="vehicle" />
                  <label for="suv">SUV</label>
                </div>
                <div class="col-6 col-12-xsmall">
                  <!-- <input type="date" name="date" v-model="date"
                  value placeholder="Date" /> -->
                  <datepicker name="date" placeholder="Date"></datepicker>
                </div>
                <div class="col-6 col-12-xsmall">
                   <!-- <label for="time">Choose a pickup time: </label> -->
                   <p>Choose a pickup time</p>
                   <input type="time" name="time" v-model="time" value placeholder="time" /> 
                  <!-- <vue-timepicker format="hh:mm A" name="time" placeholder="Time"></vue-timepicker> -->
                   <!-- <b-form-timepicker id="timepicker-placeholder" name="time" placeholder="Choose a time" local="en"></b-form-timepicker> -->

                </div>

                <!-- Break -->
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input type="submit" value="Submit" class="primary" />
                    </li>
                    <li>
                      <input type="reset" value="Reset" />
                    </li>
                    <li>
                      <input type="button" value="Cancel" @click="backToDashboard"/>
                    </li>
                  </ul>
                </div>

              </div>
          </form>
				</section>
        
            <h2  v-show="hospitalAssitanceSuccessfull ">  Hospital Assitance Form </h2>
             <form @submit.prevent="submitHospitalAssistanceForm" v-show="hospitalAssitanceSuccessfull">
              <div class="row gtr-uniform">
              <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="PatientFirstName"
                  value
                  placeholder="Patients First Name"
                  v-model="PatientFirstName"
                  required
                />
                </div>
                <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="PatientLastName"
                  value
                  placeholder="Patients Last Name"
                  v-model="PatientLastName"
                  required
                />
                </div>
                <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="PatientsLocation"
                  value
                  placeholder="Patient location/address"
                  v-model="PatientLocation"
                />
                </div>
                <div class="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="PatientsContactPhoneNumber"
                  value
                  placeholder="Patient/Relative/Contact Person Phone Number"
                  v-model="PatientsContactPhoneNumber"
                />
                </div>
                <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Submit" class="primary"  /></li>
                  <li>
                    <input type="button" value="Cancel" @click="cancelHospitalForm" v-show="hospitalAssitanceSuccessfull" />
                  </li>
                 </ul>
              </div>
              </div>
              
             </form>

          <!-- Section -->
          <!--  <section>
            <header class="major">
              <h2>Erat lacinia</h2>
            </header>
            <div class="features">
              <article>
                <span class="icon fa-gem"></span>
                <div class="content">
                  <h3>Portitor ullamcorper</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-paper-plane"></span>
                <div class="content">
                  <h3>Sapien veroeros</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-rocket"></span>
                <div class="content">
                  <h3>Quam lorem ipsum</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
              <article>
                <span class="icon solid fa-signal"></span>
                <div class="content">
                  <h3>Sed magna finibus</h3>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                </div>
              </article>
            </div>
          </section>-->

          <!-- Section -->
          <!--  <section>
            <header class="major">
              <h2>Ipsum sed dolor</h2>
            </header>
            <div class="posts">
              <article>
                <a href="#" class="image">
                  <img src="images/pic01.jpg" alt />
                </a>
                <h3>Interdum aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic02.jpg" alt />
                </a>
                <h3>Nulla amet dolore</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic03.jpg" alt />
                </a>
                <h3>Tempus ullamcorper</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic04.jpg" alt />
                </a>
                <h3>Sed etiam facilis</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic05.jpg" alt />
                </a>
                <h3>Feugiat lorem aenean</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="images/pic06.jpg" alt />
                </a>
                <h3>Amet varius aliquam</h3>
                <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
            </div>
          </section>-->
        </div>
       
      </div>
       <Sidebar/>
      </div>
      

     
  </div>
</template>

<script>
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
import formService from "@/apiservices/formService.js";
import Datepicker from "vuejs-datepicker";
// import VueTimepicker from "vue2-timepicker";

export default {
  data() {
    return {
      assistanceSuccess: false,
      pickupSuccess: false,
      firstName: "",
      lastName: "",
      pickupLocation: "",
      dropoffLocation: "",
      phoneNumber: "",
      vehicle: "",
      date: "",
      time: ""
    }
    
  },
  components: { 
    Header,
    Sidebar,
    Datepicker
    // VueTimepicker
    },
    methods: {
      submitPatientPickup() {
        formService
          .submitPatientPickup({
            firstName: this.firstName,
            lastName: this.lastName,
            pickupLocation: this.pickupLocation,
            dropoffLocation: this.dropoffLocation,
            phoneNumber: this.phoneNumber,
            vehicle: this.vehicle,
            date: this.date,
            time: this.time
          })

          .then(response => {
            response.data;
            console.log(response);
                    
            })
        },
      pickupButton() {
        this.pickupSuccess = true
      },
      backToDashboard() {
        this.pickupSuccess = false
      }
    }
=======
import formService from "@/apiservices/formService"
export default {
  components: { Header ,Sidebar},
  data(){
    return{
      PatientFirstName: "",
      PatientLastName: "",
      PatientLocation: "",
      PatientsContactPhoneNumber:"",

    hospitalAssitanceSuccessfull: false,
    
    }
  },
  watch:{
  PatientFirstName(value) {
      this.PatientFirstName = value;
      this.check_PatientFirstName(value);
    },
  },
  methods:{
    submitHospitalAssistanceForm(){
      formService
        .submitHospitalAssistanceForm({
          PatientFirstName: this.PatientFirstName,
          PatientLastName: this.PatientLastName,
          PatientLocation: this.PatientLocation,
          PatientsContactPhoneNumber: this.PatientsContactPhoneNumber,
        })
        .then(() => {

        })
        .catch(error => {
         
          console.log("There was an error", error.response);
         
          });
       
   },
    
    ShowHospitalForm(){

   this.hospitalAssitanceSuccessfull= true

    },
    pickupshow(){
      this.pickup= true
    },
    cancelHospitalForm(){
      this.hospitalAssitanceSuccessfull= false
    }
  }
};
</script>

<style lang="scss" >
@import "@/design/main.scss";
</style>
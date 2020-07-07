<template>
  <div>
    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Banner -->
          <section id="banner">
            <div class="content">
              <header class="major">
                <h2> Parental Care
                  <br> by PRANAMA</h2>
                <p>Taking care of your aging parents is a noble move .</p>

              </header>
              <!-- p>Caring Your Aging Parents Is not easy in Todays Busy Schedule of life, that too in the other side 
                of the globe America. The distance, time, leave availability and the expenses are the hurdles that 
                stay in between your love to your parents and discharging your responsibilities of the care and 
                attention you would love to give them. On their health and treatment side we offer total solution. 
                We take care of them from home to hospital to home, hospital stay, and after discharge services, 
                the way you would do, if you are physically present. 
                You will get daily reports which includes videos, photos, feedback’s etc. 
                Your parents will not feel your absence. 
                You can be happy for give them your best to all they have done for you...</p -->
              <p>
                 Taking care of your Aging Parents is your moral responsibility. You will genuinely want to do it.
                  Now it is not an easy task in today’s busy world. You are living miles away, may be even on the other side of the globe, America. 
                 Your Career, Children’s education, the travel distance & time, leave availability and the huge expenses needed 
                 to reach home are the hurdles that stay in between your love for your parents and taking care of them
                 and attention you would love to give them. We, at Pranama, take up the responsibility, as per your wish.
                   We arrange Pickup and Drop-off responsibility, Driver services, Out Patient Bystander Support,
                    Patient Bystander Services for admitted persons, Doctor at home for minor ailments, Health Checkup’s from home,
                     and even total Solutions for Medical treatment. You will be provided with daily reports which includes videos, 
                     photos, feedback’s etc. Your parents will not feel your absence. We believe in total Professionalism. </p>
                    <p>These services will be provided to all your Nears and Dears on your request.</p>
                    <div>
        <ul class="actions">
          
          <li>
            <input type="button" value="Process" @click="$router.push({name: 'TheProcess'})" />
          </li>
        </ul>
      </div>

               <!-- On Time Guarantee* : The Pranama On Time Guarantee states that we will arrive within 15 minutes of 
                the scheduled departure time or the ride is half-price.   
                Cashless Transactions: All pricing is quoted in advance and once completed, 
                trips are automatically billed to a credit card on file or deducted from a pre-paid balance. 
                Our Driver Companions don't accept tips, so there is never a need to carry cash.   
                Safety: All Pranama Driver Companions have clean driving records and have gone through extensive 
                background checks prior to beginning service with SilverRide. 
                All Driver Companions are fingerprinted, background-checked and drug tested. 

              </p> -->

              <!--<p><a href="#" v-show="!displayReadMore" @click="readMore">Read More</a><span v-show="displayContent">Caring Your Aging Parents Is not easy in Todays Busy Schedule of life, that too in the other side of the globe America. The distance, time, leave availability and the expenses are the hurdles that stay in between your love to your parents and discharging your responsibilities of the care and attention you would love to give them. On their health and treatment side we offer total solution. We take care of them from home to hospital to home, hospital stay, and after discharge services, the way you would do, if you are physically present. You will get daily reports which includes videos, photos, feedback’s etc. Your parents will not feel your absence. You can be happy for give them your best to all they have done for you...</span></p>-->
              <!-- <ul class="actions">
                <li>
                  <a href="#" class="button big">Learn More</a>
                </li>
              </ul>-->
            </div>
            <span class="image object">
              <img src="@/assets/images/old_age_help_2.jpg" alt />
            </span>
            <!-- <div>
              <br>
              <br>
              <br>
                 <iframe width="350" height="315" src="https://www.youtube.com/embed/X5xvlXV9crE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> -->
          </section>
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
export default {
  created() {
    console.log('Panama page is loaded !');
    formService.commonService().then(response => {
          console.log(response);
          this.users = response.data.data;
          this.userRegistrationSuccessful = true;
        }).catch(error => {
          console.log("Error reported from endpoints :", error.response);
          this.isError = true;
          return (this.errorMessage = JSON.stringify(
            error.response.data.errorMessage
          ));
        }); 
  },
  components: { Header ,Sidebar},
  data(){
    return{
      displayReadMore: false,
      displayContent:false
    }
  },
  methods: {
    readMore(){
    this.displayReadMore= true,
    this.displayContent= true
    }
  }
};
</script>

<style lang="scss" >
@import "@/design/main.scss";

</style>
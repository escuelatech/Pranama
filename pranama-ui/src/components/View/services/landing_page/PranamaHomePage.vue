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
              <header>
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
                 Door Through Door Assisted Ride Service:    
                 Pranama provides flexible transportation options to meet the needs of our clients. 
                 Our assisted ride transportation is provided with door-through-door service by our Driver 
                 Companions in a comfortable senior-friendly vehicle.   
                 Tailored Service:  Because of the extensive training of our Driver Companions and the technology 
                 we use to support them, SilverRide is able to deliver highly tailored service to our clients 
                 based on their unique needs.  Whatever condition they have, 
                 we are prepared to help based on the training drivers have already received, 
                 and the materials they have at their fingertips with the apps we provide them.   
                 Best Insurance in the Industry:  SilverRide maintains full $1M primary liability 
                 insurance for all vehicles whether company-owned or part of ourdriver partner fleet.  
                 For our rideshare drivers, this include $1M of coverage for all three periods of the TNC rules, 
                 and include physical damage coverage for the drivers' vehicles (we're looking out for them too!). 
                Each rideshare driver also gets a SilverRide insurance card for their vehicle, 
                so they never have to use their own personal insurance in an accident.  
                In addition, the Company also maintains insurance for all incidents that can happen OUTSIDE of the 
                vehicle.  So when we take our clients out for walks in the park, to doctor's appointments -- 
                anywhere they are going -- clients are covered from the moment we get them from 
                in their home to inside wherever they are going. </p>

               <!-- On Time Guarantee* : The Pranama On Time Guarantee states that we will arrive within 15 minutes of 
                the scheduled departure time or the ride is half-price.   
                Cashless Transactions: All pricing is quoted in advance and once completed, 
                trips are automatically billed to a credit card on file or deducted from a pre-paid balance. 
                Our Driver Companions don't accept tips, so there is never a need to carry cash.   
                Safety: All Pranama Driver Companions have clean driving records and have gone through extensive 
                background checks prior to beginning service with SilverRide. 
                All Driver Companions are fingerprinted, background-checked and drug tested. 

              </p> -->

              <p><a href="#" v-show="!displayReadMore" @click="readMore">Read More</a><span v-show="displayContent">Caring Your Aging Parents Is not easy in Todays Busy Schedule of life, that too in the other side of the globe America. The distance, time, leave availability and the expenses are the hurdles that stay in between your love to your parents and discharging your responsibilities of the care and attention you would love to give them. On their health and treatment side we offer total solution. We take care of them from home to hospital to home, hospital stay, and after discharge services, the way you would do, if you are physically present. You will get daily reports which includes videos, photos, feedback’s etc. Your parents will not feel your absence. You can be happy for give them your best to all they have done for you...</span></p>
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
import Sidebar from "@/components/View/common/Sidebar"
export default {
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
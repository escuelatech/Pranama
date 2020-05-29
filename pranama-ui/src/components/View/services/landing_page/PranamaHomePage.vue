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
                <h2>
                  Parental Care
                  <br />by PRANAMA
                </h2>
                <p>TAKING CARE OF YOUR AGEING PARENTS IS A NOBLE MOVE</p>
              </header>
              <p>Caring Your Aging Parents Is not easy in Todays Busy Schedule of life, that too in the other side of the globe America. The distance, time, leave availability and the expenses are the hurdles that stay in between your love to your parents and discharging your responsibilities of the care and attention you would love to give them. On their health and treatment side we offer total solution. We take care of them from home to hospital to home, hospital stay, and after discharge services, the way you would do, if you are physically present. You will get daily reports which includes videos, photos, feedback’s etc. Your parents will not feel your absence. You can be happy for give them your best to all they have done for you...</p>
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
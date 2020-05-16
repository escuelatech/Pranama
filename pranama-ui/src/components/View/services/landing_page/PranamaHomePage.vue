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
              <p>Caring Your Aging Parents Is not easy in Todays Busy Schedule of life, that too in the other side of the globe America. The distance, time, leave availability and the expenses are the hurdles that stay in between your love to your parents and discharging your responsibilities of the care and attention you would love to give them. On their health and treatment side we offer total solution. We take care of them from home to hospital to home, hospital stay, and after discharge services, the way you would do, if you are physically present. You will get daily reports which includes videos, photos, feedback’s etc. Your parents will not feel your absence. You can be happy for give them your best for all they have done for you...</p>
               <ul class="actions">
                <li>
                  <a href="#" class="button big">Learn More</a>
                </li>
              </ul>
            </div>
            <span class="image object">
              <img src="@/assets/images/old_age_help_2.jpg" alt />
            </span>
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
  components: { Header ,Sidebar}
};
</script>

<style lang="scss" >
@import "@/design/main.scss";
</style>
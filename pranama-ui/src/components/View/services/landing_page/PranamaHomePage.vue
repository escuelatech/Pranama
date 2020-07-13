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
              <p>
                 Taking care of your Aging Parents is your moral responsibility. You will genuinely want to do it.
                  Now it is not an easy task in today’s busy world. You are living miles away, may be even on the other side of the globe, America. 
                 Your Career, Children’s education, the travel distance & time, leave availability and the huge expenses needed 
                 to reach home are the hurdles that stay in between your love for your parents and taking care of them
                 and attention you would love to give them. </p>

            <header class="major">
                <p>Your parents will not feel your absence. We believe in total Professionalism.</p>
            </header>
                  <p>
                 We, at Pranama, take up the responsibility, as per your wish.
                   We arrange Pickup and Drop-off responsibility, Driver services, Out Patient Bystander Support,
                    Patient Bystander Services for admitted persons, Doctor at home for minor ailments, Health Checkup’s from home,
                     and even total Solutions for Medical treatment. You will be provided with daily reports which includes videos, 
                     photos, feedback’s etc. 
                    </p>
                    
                    <p>These services will be provided to all your Nears and Dears on your request.</p>
                    <div>
            <ul class="actions">
              <li>
                <input type="button" value="Process" @click="$router.push({name: 'TheProcess'})" />
              </li>
            </ul>
      </div>   
        </div>
              <span class="image object">
                <!-- <img src="@/assets/images/old_age_help_2.jpg" alt /> -->
                <img src="@/assets/images/5.jpg" alt="" height="100"/>
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
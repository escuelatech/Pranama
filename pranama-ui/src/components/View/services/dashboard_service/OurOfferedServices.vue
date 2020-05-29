<template>
    <div>
    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <!-- Header -->
          
          <section>
              <div class="row">
                  <!-- <div class="col-4 col-12-medium">
                      <h3>Ayurveda Treatment</h3>
                      <p>
                          Ayurveda is the 5th Veda needed for health, the traditional natural, healing system, 
                practiced in India for more than 5000 years. Ayurveda derives the name from the Sanskrit words, “ayur” “veda”. 
                Ayur means life and longevity. So Ayurveda is the science of Healthy life. For healthy life we need balanced diet, healthy lifestyle and harmonious mind Ayurvedic Therapies Panchakarma We are associated with few Ayurveda hospitals for Rejnuvation treatments like Panchakarma. 
                If needed treatment options also can arranged.
                      </p>
                  </div> -->
                  <div class="col-6 col-12-medium">
                      <h3>Patient Pickup</h3>
                      <p>
                          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
								integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
								lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.
                      </p>
                      <input type="button"  value="Patient Pickup" class="primary"  @click="$router.push({name: 'PatientPickupPage'})" />
                  </div>
                  <div class="col-6 col-12-medium">
                      <h3>Hospital Assistance</h3>
                      <p>
                          Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
								integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante
								lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit.
                      </p>
                      <input type="button"  value="Hospital Assistance" class="primary"  @click="$router.push({name: 'HospitalAssistancePage'})" />
                  </div>
                  
              </div>
          </section>

        </div>
      </div>
      <!-- Main ends -->
      <!-- Sidebar -->
      <Sidebar />
      <!-- Sidebar -->
    </div>
    </div>
</template>

<script>
import Header from "@/components/View/common/Header";
import Sidebar from "@/components/View/common/Sidebar";
    export default {
        components: {
            Header,
            Sidebar
        }
    }
</script>

<style lang="scss" scoped>

</style>
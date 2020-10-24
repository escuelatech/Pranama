<template>
  <div>
    <!-- Wrapper -->
    <div id="wrapper">
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <!-- Header -->
          <Header />
          <br>
           <div class="box">
               <h5>You have successfully logged out of Pranama Dashboard</h5>
              <p>All the value added services can be requested after you login to the system, thanks for using our dashboard</p>
                <!-- <button @click="$router.push('/')" class="button primary">Go to Homepage</button> -->

              <!-- <header class="major">
										<h3>Our Contact</h3>
							</header> -->
							<p> If you have any queries or suggestions. Please get in touch with us</p>
							<ul class="contact">
										<li class="icon solid fa-envelope"><a href="#" @click="$router.push('/contactus')">info@pranama.in</a></li>
										<li class="icon solid fa-phone">(000) 000-0000</li>
										<li class="icon solid fa-home">1234 Somewhere Road #8254<br />
										Nashville, TN 00000-0000</li>
							</ul>


						</div>

						
            
        </div>
      </div>
      <!-- Main ends -->

      <!-- Sidebar -->
      <!-- <Sidebar /> -->
      <!-- Sidebar -->
    </div>
  </div>
</template>
<script>
  import Header from "@/components/View/common/Header";
  // import Sidebar from "@/components/View/common/Sidebar";
  export default {components: { 
    Header, 
    // Sidebar 
  }};
</script> 

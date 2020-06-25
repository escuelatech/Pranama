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
          <!-- Form -->
          <section>
					<!-- <header class="main">
						<h1>Elements</h1>
					</header> -->
					<!-- Content -->
					<button type="button" @click="$router.push({name: 'ViewStatus'})">View Status</button>
					<br>
					<br>
					<h2 id="content">How it works </h2>
					<p>If have a requirement to take care of your Nears & Dears in India, Kerala, Kozhikode you can go
						to the contact us page and submit your requirement or else please feel free to call ———-
						(America’s mobile number) or give your requirement in Whatsapp in the same number. The
						requirement will be processed and a report sent to you through WhatsApp in your mobile with our
						suggested options with the cost involved.

						After negotiations and finalization, we will contact your Nears & Dears. chalk out a detailed
						plan and act according to the plan. After discharge if needed, after discharge services also
						will be provided. Even pickup and drop services from home to hospital and back will also be
						provided.

						In between daily reports will be provided to update the status of progress..
					</p>
					<br>
					<div>
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/kKZo89FYZeY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
					<div class="row">
						<!-- <div class="col-4 col-12-small">
							<input type="button"  value="Patient Pickup" class="primary"  @click="$router.push({name: 'PatientPickupPage'})" />
						</div>
						<div class="col-4 col-12-small">
							<input type="button"  value="Hospital Assistance" class="primary"  @click="$router.push({name: 'HospitalAssistancePage'})" />
						</div> -->
						<div class="col-4 col-12-small">
							<input type="button"  value="Our Offered Services" class="primary"  @click="$router.push({name: 'OurOfferedServices'})" />
						</div>
					</div>
				</section>
          <!-- Form -->
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
export default {components: { Header, Sidebar  }};
</script>

<style lang="scss" scoped>

</style>
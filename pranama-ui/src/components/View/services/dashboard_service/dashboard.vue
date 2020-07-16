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
          <!-- <section> -->
          <div class="text-justify">
            <header class="major">
              <h2>How it works</h2>
            </header>
					<!-- <h2 id="content">How it works </h2> -->
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
					
					<div class="row">
						<div class="col-4 col-12-small">
							<input type="button"  value="Our Offered Services" class="primary"  @click="$router.push({name: 'OurOfferedServices'})" />
						</div>
					</div>
					<div>
                
            </div>
				</div>
				<!-- </section> -->
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
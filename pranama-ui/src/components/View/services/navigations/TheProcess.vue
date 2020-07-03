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
          <!-- <header class="main">
						<h1>Elements</h1>
          </header>-->

          <!-- Content -->
          <!-- <h2 id="content">How it works </h2> -->
          <div>
            <header class="major">
              <h2>How PRANAMA works</h2>
			</header>
			<button class="button secondary contact" @click="$router.push({ name: 'ContactEmailPage' })">Contact Us</button>
			<p>Pranama offers you an all round medical support system, for your relatives who needs medical care. Now we are operational in Kozhikode District of Kerala, India. We will be extending our services to other cities of Kerala shortly.  We have a powerful professional system with Doctors, well trained and well mannered Para-medic staff, well behaved drivers, Office staff, and digital infrastructure for our services</p>
			<p>Pranama offers you an all round medical support system, for your relatives who needs medical care. Now we are operational in Kozhikode District of Kerala, India. We will be extending our services to other cities of Kerala shortly.  We have a powerful professional system with Doctors, well trained and well mannered Para-medic staff, well behaved drivers, Office staff, and digital infrastructure for our services</p>
			<p>We will immediately contact you, understand your requirements and communicate with your relative at their convenience. We will then work out a plan and the approximate budget. We will send you the report in your email and Whatsapp.</p>
			<p>Our services start immediately after signing the contract with our terms and conditions. You will be updated daily about the status and progress of the patient via, Whatsapp, email etc.</p>
            <div>
              <header class="major">
                <h2>Our Services.</h2>
              </header>
              <div class="row">
                <!-- <div class="col-6 col-12-small">
							<h3>Sem turpis amet semper</h3>
							<p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi
								integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat commodo eu sed
								ante lacinia. Sapien a lorem in integer ornare praesent commodo adipiscing arcu in massa
								commodo lorem accumsan at odio massa ac ac. Semper adipiscing varius montes viverra nibh
								in adipiscing blandit tempus accumsan.</p>
						</div>
						<div class="col-6 col-12-small">
							<h3>Magna odio tempus commodo</h3>
							<p>In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim aliquet. Accumsan ac
								integer lobortis commodo ornare aliquet accumsan erat tempus amet porttitor. Ante
								commodo blandit adipiscing integer semper orci eget. Faucibus commodo adipiscing mi eu
								nullam accumsan morbi arcu ornare odio mi adipiscing nascetur lacus ac interdum morbi
								accumsan vis mi accumsan.</p>
                </div>-->
                <!-- Break -->

                <div class="col-4 col-12-medium">
                  <h3>Pick up and Drop</h3>
                  <h4>Option 1:</h4>
                  <h5>Driver Services:</h5>
                  <span>
                    <p>If car is available we provide experienced and well mannered driver who will take them to hospital and wait for their return and drop them back at their home.</p>
                  </span>
                  <h4>Option 2:</h4>
                  <h5>Taxi Services:</h5>
                  <p>We provide experienced and well mannered driver. They will come in clean and nice cars and will offer their services as per the requirement.</p>
                </div>
                <div class="col-4 col-12-medium">
                  <h3>Bystander Services</h3>
                  <h4>Option 1:</h4>
                  <p>Our trained Bystanders will accompany the patient to the hospital arrange and support all needed formalities for Out Patient Services. They will also give emotional support to the patients. This can be extended for day care procedures, Dialysis etc.</p>
                  <h4>Option 2:</h4>
                  <p>Our trained Bystanders will accompany the patient to the hospital arrange and support all needed formalities for admitted Patients in hospitals. They will also give emotional support to the patients. Bystanders will be posted on duty in turn for all 24 hours</p>
                </div>
                <div class="col-4 col-12-medium">
                  <h3>Total Solutions</h3>
                  <h4>Option 1:</h4>
                  <p>Our Doctor shall visit your patient and plan the needed treatment, contact you and after our contract is done we will take total responsibility for all processes of Pick and Drop, Bystander services, After discharge services using our trained Bystanders and Para-medic staff.</p>
                  <h3>Yearly Contract</h3>
                  <h4>Option 2:</h4>
                  <p>We take up the total responsibility of your patient with monthly or bimonthly Doctor Visits, Check-ups, Lab tests, other investigations like Scan, when ever needed. In case hospitalization becomes needed you can opt for total solutions.</p>
                </div>
              </div>
            </div>
          </div>
          <!-- </section> -->
          <div>
            <h3>
              <a href="#process" @click="clickToShowProcess">Checkout How We Work Here</a>
            </h3>
          </div>
          <br />
          <!-- Section 
				<section>
					<header class="major">
						<h2>Erat lacinia</h2>
					</header>
					<div class="features">
						<article>
							<span class="icon fa-gem"></span>
							<div class="content">
								<h3>Portitor ullamcorper</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
									facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
							</div>
						</article>
						<article>
							<span class="icon solid fa-paper-plane"></span>
							<div class="content">
								<h3>Sapien veroeros</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
									facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
							</div>
						</article>
						<article>
							<span class="icon solid fa-rocket"></span>
							<div class="content">
								<h3>Quam lorem ipsum</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
									facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
							</div>
						</article>
						<article>
							<span class="icon solid fa-signal"></span>
							<div class="content">
								<h3>Sed magna finibus</h3>
								<p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
									facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.</p>
							</div>
						</article>
					</div>
          </section>-->
          <!-- Section -->
          <!-- <section v-show="displayProcess" id="process"> -->
          <div v-show="displayProcess" id="process">
            <header class="major">
              <h3>The way it works</h3>
            </header>
            <div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/kKZo89FYZeY"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <br />
            <div class="posts">
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/7.jpg" alt />
                </a>
                <h3>Interdum aenean</h3>
                <p>
                  If have a requirement to take care of your Nears & Dears in India, Kerala, Kozhikode you
                  can go to the contact us page and submit your requirement or else please feel free to
                  cal. ———- (America’s mobile number) or give your requirement in Whatsapp in the same
                  number
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/2.jpg" alt />
                </a>
                <h3>Nulla amet dolore</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                  facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/3.jpg" alt />
                </a>
                <h3>Tempus ullamcorper</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                  facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/4.jpg" alt />
                </a>
                <h3>Sed etiam facilis</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                  facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/5.jpg" alt />
                </a>
                <h3>Feugiat lorem aenean</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                  facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
              <article>
                <a href="#" class="image">
                  <img src="@/assets/images/6.jpg" alt />
                </a>
                <h3>Amet varius aliquam</h3>
                <p>
                  Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                  facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                </p>
                <ul class="actions">
                  <li>
                    <a href="#" class="button">More</a>
                  </li>
                </ul>
              </article>
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

export default {
  components: { Header, Sidebar },
  data() {
    return {
      displayProcess: false
    };
  },
  methods: {
    clickToShowProcess() {
      this.displayProcess = true;
    }
  }
};
</script>

<style lang="scss" >
.contact{
   position: absolute;
   top:180px;
   right: 150px;
 
  transform: translateY(-50%);
}

</style>
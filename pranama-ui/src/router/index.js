import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactPage from '@/components/View/services/email_service/ContactPage.vue';
import PranamaHomePage from '@/components/View/services/landing_page/PranamaHomePage.vue';
import ContactEmailPage from '@/components/View/services/email_service/ContactEmailPage.vue';
import RegistrationForm from '@/components/View/services/registration_service/RegistrationForm.vue';
import WhatWeDo from '@/components/View/services/navigations/WhatWeDo.vue';
import TheProcess from '@/components/View/services/navigations/TheProcess.vue';
import Ayurveda from "@/components/View/services/navigations/Ayurveda.vue";
import Yoga from "@/components/View/services/navigations/Yoga.vue";
import MentalHealth from "@/components/View/services/navigations/MentalHealth.vue";
import PreventiveHealth from "@/components/View/services/navigations/PreventiveHealth.vue";
import DoctorAtHome from "@/components/View/services/navigations/DoctorAtHome.vue";


Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
    {
      path: '/Pranama',
      name: 'Pranama',
      component: PranamaHomePage
    },
    {
      path: '/contactus',
      name: 'ContactEmailPage',
      component: ContactEmailPage
    },
    {
      path: '/RegistrationForm',
      name: 'RegistrationForm',
      component: RegistrationForm
    },
    {
      path: '/WhatWeDo',
      name: 'WhatWeDo',
      component: WhatWeDo
    },
    {
      path: '/TheProcess',
      name: 'TheProcess',
      component: TheProcess
    },
   
   
    {
      path: '/Ayurveda',
      name: 'Ayurveda',
      component: Ayurveda
    },
    {
      path: '/Yoga',
      name: 'Yoga',
      component: Yoga
    },
    {
      path: '/MentalHealth',
      name: 'MentalHealth',
      component: MentalHealth
    },
    {
      path: '/PreventiveHealth',
      name: 'PreventiveHealth',
      component: PreventiveHealth
    },
    {
      path: '/DoctorAtHome',
      name: 'DoctorAtHome',
      component: DoctorAtHome
    },

     { path: '*', redirect: '/Pranama' }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {
          selector: to.hash
          // , offset: { x: 0, y: 10 }
        }
      }
      return { x: 0, y: 0 }
    }
  }
});

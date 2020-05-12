import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactPage from '@/components/View/services/email_service/ContactPage.vue';
import PranamaHomePage from '@/components/View/services/landing_page/PranamaHomePage.vue';
import ContactEmailPage from '@/components/View/services/email_service/ContactEmailPage.vue';
import RegistrationForm from '@/components/View/services/registration_service/RegistrationForm.vue';
// import WhatWeDo from '@/components/View/services/navigations/WhatWeDo.vue';
import TheProcess from '@/components/View/services/navigations/TheProcess.vue';
import Ayurveda from "@/components/View/services/navigations/Ayurveda.vue";
import Yoga from "@/components/View/services/navigations/Yoga.vue";
import MentalHealth from "@/components/View/services/navigations/MentalHealth.vue";
import PreventiveHealth from "@/components/View/services/navigations/PreventiveHealth.vue"
import DoctorAtHome from "@/components/View/services/navigations/DoctorAtHome.vue";
import LoginPage from "@/components/View/services/login_service/LoginPage.vue";
import form1 from "@/traumaservices/form1.vue"
import form2 from "@/traumaservices/form2.vue";
import hospitalAssistancePage from "@/components/View/services/our_services/hospital_assistance/hospitalAssistancePage.vue"


const DashboardPage = () => import(/* webpackChunkName: "dashboard" */ '@/components/View/services/dashboard_service/dashboard.vue')
const LogoutPage = () => import(/* webpackChunkName: "dashboard" */ '@/components/View/services/login_service/LogoutPage.vue')

Vue.use(VueRouter);

const router = new VueRouter({
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
    // {
    //   path: '/WhatWeDo',
    //   name: 'WhatWeDo',
    //   component: WhatWeDo
    // },
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
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/LogoutPage',
      name: 'LogoutPage',
      component: LogoutPage
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/form1',
      name: 'form1',
      component: form1
    },
    {
      path: '/form2',
      name: 'form2',
      component: form2
    },
    {
      path: '/hospitalAssistancePage',
      name: 'hospitalAssistancePage',
      component: hospitalAssistancePage
    },
      
    { 
      path: '*', 
      redirect: '/Pranama' 
    }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const loggedIn = localStorage.getItem('token');
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
});

export default router;
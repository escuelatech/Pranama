import Vue from 'vue';
import VueRouter from 'vue-router';
import ContactPage from '@/components/View/services/contactus_service/ContactPage.vue';
import PranamaHomePage from '@/components/View/services/landing_page/PranamaHomePage.vue';
import ContactEmailPage from '@/components/View/services/contactus_service/ContactEmailPage.vue';
import RegistrationPage from '@/components/View/services/registration_service/RegistrationPage.vue';
import TheProcess from '@/components/View/services/navigations/TheProcess.vue';
import Ayurveda from "@/components/View/services/navigations/Ayurveda.vue";
import Yoga from "@/components/View/services/navigations/Yoga.vue";
import MentalHealth from "@/components/View/services/navigations/MentalHealth.vue";
import PreventiveHealth from "@/components/View/services/navigations/PreventiveHealth.vue"
import DoctorAtHome from "@/components/View/services/navigations/DoctorAtHome.vue";
import LoginPage from "@/components/View/services/login_service/LoginPage.vue";
import PatientPickupPage from '@/components/View/services/our_services/patient_pickup/PatientPickupPage.vue'
import hospitalAssistancePage from '@/components/View/services/our_services/hospital_assistance/hospitalAssistancePage.vue'
import forgotPassword from "@/components/View/services/user_service/forgotPassword.vue"
import resetPassword from "@/components/View/services/user_service/resetPassword.vue"
// import form1 from "@/traumaservices/form1.vue"
// import form2 from "@/traumaservices/form2.vue"
// import WhatWeDo from '@/components/View/services/navigations/WhatWeDo.vue';
import HospitalSearchPage from '@/components/View/services/hospital_service/HospitalSearchPage.vue'

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
      path: '/RegistrationPage',
      name: 'RegistrationPage',
      component: RegistrationPage
    },
    {
      path: '/TheProcess',
      name: 'TheProcess',
      component: TheProcess
    },
    {
      path: '/Hospital',
      name: 'Hospital',
      component: HospitalSearchPage
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
    // {
    //   path: '/form1',
    //   name: 'form1',
    //   component: form1
    // },
    // {
    //   path: '/form2',
    //   name: 'form2',
    //   component: form2
    // },
    {
      path: '/PatientPickupPage',
      name: 'PatientPickupPage',
      component: PatientPickupPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/hospitalAssistancePage',
      name: 'hospitalAssistancePage',
      component: hospitalAssistancePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path: '/resetPassword',
      name: 'resetPassword',
      component: resetPassword
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
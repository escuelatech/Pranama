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
import PreventiveHealth from "@/components/View/services/navigations/PreventiveHealth.vue";
import DoctorAtHome from "@/components/View/services/navigations/DoctorAtHome.vue";
import LoginPage from "@/components/View/services/login_service/LoginPage.vue";
import PatientPickupPage from '@/components/View/services/our_services/patient_pickup/PatientPickupPage.vue';
import HospitalAssistancePage from '@/components/View/services/our_services/hospital_assistance/HospitalAssistancePage.vue';
import ForgotPassword from "@/components/View/services/user_service/ForgotPassword.vue";
import ResetPasswordPage from "@/components/View/services/user_service/ResetPasswordPage.vue";
import EditProfilePage from "@/components/View/services/user_service/EditProfilePage.vue";
import AgentOnboardPage from "@/components/View/services/agent_service/AgentOnBoardPage.vue"
// import form1 from "@/traumaservices/form1.vue"
// import form2 from "@/traumaservices/form2.vue"
// import WhatWeDo from '@/components/View/services/navigations/WhatWeDo.vue';
import HospitalSearchPage from '@/components/View/services/hospital_service/HospitalSearchPage.vue';
import OurOfferedServices from '@/components/View/services/dashboard_service/OurOfferedServices.vue';
import ViewStatusPage from '@/components/View/services/user_status_service/ViewStatusPage.vue'

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
      path: '/home',
      name: 'Pranama',
      component: PranamaHomePage
    },
    {
      path: '/contactus',
      name: 'ContactEmailPage',
      component: ContactEmailPage
    },
    {
      path: '/registrationpage',
      name: 'RegistrationPage',
      component: RegistrationPage
    },
    {
      path: '/theprocess',
      name: 'TheProcess',
      component: TheProcess
    },
    {
      path: '/hospital',
      name: 'Hospital',
      component: HospitalSearchPage
    },
    {
      path: '/ayurveda',
      name: 'Ayurveda',
      component: Ayurveda
    },
    {
      path: '/yoga',
      name: 'Yoga',
      component: Yoga
    },
    {
      path: '/mentalhealth',
      name: 'MentalHealth',
      component: MentalHealth
    },
    {
      path: '/preventivehealth',
      name: 'PreventiveHealth',
      component: PreventiveHealth
    },
    {
      path: '/doctorathome',
      name: 'DoctorAtHome',
      component: DoctorAtHome
    },
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/logoutpage',
      name: 'LogoutPage',
      component: LogoutPage
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/ourofferedservices',
      name: 'OurOfferedServices',
      component: OurOfferedServices
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
      path: '/patientpickuppage',
      name: 'PatientPickupPage',
      component: PatientPickupPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/hospitalassistancepage',
      name: 'HospitalAssistancePage',
      component: HospitalAssistancePage,
      meta: { requiresAuth: true }
    },
    {
      path: '/forgotpassword',
      name: 'forgotPassword',
      component: ForgotPassword
    },
    {
      path: '/resetpassword',
      name: 'resetPassword',
      component: ResetPasswordPage
    },
    {
      path: '/editprofilepage',
      name: 'editProfile',
      component: EditProfilePage
    },
    {
      path: '/agentonboardpage',
      name: 'AgentOnBoardPage',
      component: AgentOnboardPage
    },
    {
      path: '/viewstatus',
      name: 'ViewStatus',
      component: ViewStatusPage
    },
    { 
      path: '*', 
      redirect: '/home' 
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
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/components/View/services/landing_page/HomePage.vue';
import RegistrationPage from '@/components/View/services/registration_service/RegistrationPage.vue';
import LoginPage from '@/components/View/services/login_service/LoginPage.vue';
import ForgotPassword from '@/components/View/services/user_service/ForgotPassword.vue';
import ResetPassword from '@/components/View/services/user_service/ResetPassword.vue';
import EditProfilePage from '@/components/View/services/user_service/editprofile_service/EditProfilePage.vue';
import RegisteredUsers from '@/components/View/services/user_service/RegisteredUsers.vue';
import AddCarPage from '@/components/View/services/add_car_service/AddCarPage.vue';
import AddAgentPage from '@/components/View/services/addagent_service/AddAgentPage.vue';
import ListRequestPage from "@/components/View/services/user_service/userRequest_service/ListRequestPage.vue";
import AgentSearchPage from "@/components/View/services/admin_service/AgentSearchPage.vue"
import UpdateAgent from "@/components/View/services/admin_service/UpdateAgent.vue";



const DashboardPage = () =>
  import(
    /* webpackChunkName: "dashboard" */ '@/components/View/services/dashboard_service/DashboardPage.vue'
  );
const LogoutPage = () =>
  import(
    /* webpackChunkName: "dashboard" */ '@/components/View/services/login_service/LogoutPage.vue'
  );

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/pranama',
      name: 'Pranama',
      component: HomePage,
    },
    {
      path: '/registrationpage',
      name: 'RegistrationPage',
      component: RegistrationPage,
    },
    {
      path: '/loginpage',
      name: 'LoginPage',
      component: LoginPage,
    },
    {
      path: '/logoutpage',
      name: 'LogoutPage',
      component: LogoutPage,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashboardPage,
      meta: { requiresAuth: true },
    },

    {
      path: '/forgotpassword',
      name: 'forgotPassword',
      component: ForgotPassword,
    },
    {
      path: '/resetpassword',
      name: 'resetPassword',
      component: ResetPassword,
    },
    {
      path: '/editprofile',
      name: 'editProfile',
      component: EditProfilePage,
    },
    {
      path: '/registeredUsers',
      name: 'RegisteredUsers',
      component: RegisteredUsers,
    },
    {
      path: '/addcarpage',
      name: 'AddCarPage',
      component: AddCarPage,
    },
    {
      path: '/addagentpage',
      name: 'AddAgentPage',
      component: AddAgentPage,
    },
    {
      path: '/listrequest/:msgId',
      name: 'listRequest',
      component: ListRequestPage
    },
    {
      path: '/agentSearchPage',
      name: 'AgentSearchPage',
      component: AgentSearchPage,
    },
   
    {
      path: '/updateAgent',
      name: 'UpdateAgent',
      component: UpdateAgent,
    },
    {
      path: '*',
      redirect: '/pranama',
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return {
          selector: to.hash,
          // , offset: { x: 0, y: 10 }
        };
      }
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    const loggedIn = localStorage.getItem('token');
    if (!loggedIn) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;

import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'

Vue.use(Vuex)

const successMessage = `<header class="major"><h4>Thank you for filling out your information !!!!</h4></header><h4>One of our team members will be getting back to you shortly as part of this registration. While we do our best to answer your queries quickly, it may take about 10 hours to receive a response from us during peak hours. Incase you did not receive any confirmation email, please contact the number provided in the Contact US Page.Thanks in advance for your patience.<br><br>Have a great day!!!!</h4>`
const registrationSuccessMessage = `<header class="major"><h4>Thank you for registering with us!!</h4></header><h4>A verification link has been sent to your email account. Please click on the link to verify your email and continue the registration process.</h4><br><h6>If you haven't received the email, do the following:<ul><li>Make sure the provided email address is correct</li><li>Check Promotions and Spam Folders</li><!-- <li>Resend confirmation email</li> --></ul>If none of the above helps, please contact us at <a href="/contactus">info@pranama.in</a></h6>`

export default new Vuex.Store({
  modules: {
    auth,
    
  },
  state: 
   {
    message: ''
   },
  mutations: {
    ADD_SUCCESS_MESSAGE: state => {
      state.message =  successMessage
    },
    ADD_ERROR_MESSAGE: (state) => {
      state.message = "error"
    },
    ADD_REG_MESSAGE: state => {
      state.message =  registrationSuccessMessage
    },
},
  actions : {
    addSuccessMessage: ({commit}) => {
      commit('ADD_SUCCESS_MESSAGE')
    },
    addErrorMessage: ({commit}) => {
      commit('ADD_ERROR_MESSAGE')
    },
    addRegMessage: ({commit}) => {
      commit('ADD_REG_MESSAGE')
    }
}
})

import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
//import message from './modules/message.js'

Vue.use(Vuex)

const registrationSuccessMessage = `<header class="major"><h4>Thank you for registering with us!!</h4></header><h4>A verification link has been sent to your email account. Please click on the link to verify your email and continue the registration process.</h4><br><h6>If you haven't received the email, do the following:<ul><li>Make sure the provided email address is correct</li><li>Check Promotions and Spam Folders</li><!-- <li>Resend confirmation email</li> --></ul>If none of the above helps, please contact us at <a href="/contactus">pranamaindia@gmail.com</a></h6>`
const pickupAssistanceSuccessMessage = `<header class="major"><h4>Thank you for filling out your information !!!!</h4></header><h4>One of our team members will be getting back to you shortly as part of this registration. While we do our best to answer your queries quickly, it may take about 10 hours to receive a response from us during peak hours. Incase you did not receive any confirmation email, please contact the number provided in the Contact US Page.Thanks in advance for your patience.<br><br>Have a great day!!!!</h4>`
<<<<<<< HEAD
const contactSuccessMessage =  `<h4>We received your email, our team will reach out to you as soon as possible.</h4>`
const editMessage = `<h4>Your profile has been successfully edited.</h4>`
const agentMessage = `<header class="major"><h4>Thank you for getting in touch with us!!</h4></header><h4>You will receive an email as part of registration,one of our team member will getting back to you for further proceedings.</h4><br><h6>If you haven't received the email, do the following:<ul><li>Make sure the provided email address is correct</li><li>Check Promotions and Spam Folders</li><!-- <li>Resend confirmation email</li> --></ul>If none of the above helps, please contact us at <a href="/contactus">pranamaindia@gmail.com</a></h6>`
=======
const contactSuccessMessage =  `<h4>We received your email, our team will reach out to you as soon as possible . Felis sagittis eget tempus primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum primis in faucibus vestibulum.</h4>`
const editMessage = `<h4>Your profile has been successfully edited.</h4>`;
>>>>>>> aefabfa131dc2e3b2a78be350624df328ee4407a
const resetPasswordSuccessMessage = `<h4>Your password has been reset successfully.</h4>`;

export default new Vuex.Store({
  modules: {
    auth,
    //message
    
  },
  state: 
   {
    message: ''
   },
  mutations: {
    ADD_REG_MESSAGE: state => {
      state.message =  registrationSuccessMessage
    },
    ADD_PICKUP_ASSISTANCE_MESSAGE: state => {
      state.message = pickupAssistanceSuccessMessage
    },
    ADD_ERROR_MESSAGE: (state) => {
      state.message = "error"
    },
    ADD_CONTACT_MESSAGE: state => {
      state.message = contactSuccessMessage
    },
    ADD_EDIT_MESSAGE: state => {
      state.message = editMessage
    },
    ADD_AGENT_MESSAGE: state => {
      state.message = agentMessage
    },
    ADD_RESET_PASSWORD_MESSAGE: state => {
      state.message = resetPasswordSuccessMessage
    }
},
  actions : {
    addRegMessage: ({commit}) => {
      commit('ADD_REG_MESSAGE')
    },
    addPickupAssistanceMessage: ({commit}) => {
      commit('ADD_PICKUP_ASSISTANCE_MESSAGE')
    },
    addErrorMessage: ({commit}) => {
      commit('ADD_ERROR_MESSAGE')
    },
    addContactSuccessMessage: ({commit}) => {
      commit('ADD_CONTACT_MESSAGE')
    },
    addEditMessage: ({commit}) => {
      commit('ADD_EDIT_MESSAGE')
    },
    addAgentMessage: ({commit}) => {
      commit('ADD_AGENT_MESSAGE')
    },
    addResetPasswordMessage: ({commit}) => {
      commit('ADD_RESET_PASSWORD_MESSAGE')
    }
}
})
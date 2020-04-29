import UserService from "@/apiservices/UserService";

const token = JSON.parse(localStorage.getItem('token'));

const initialState = token
  ? { status: { loggedIn: true }, token }
  : { status: {}, token: null };

const mutations = {
  LOGIN_REQUEST (state, token) {
    state.status = { loggingIn: true };
    state.token = token;
  },
  LOGIN_SUCCESS (state, token) {
    state.status = { loggedIn: true };
    state.token = token;
  },
  LOGIN_FAILED (state) {
    state.status = {};
    state.token = null;
  },
  LOGOUT (state) {
    state.status = {};
    state.token = null;
  }
}

const actions = {
  login ({ commit }, { username, password }) {
    commit('LOGIN_REQUEST', { username });
    return UserService.login(username, password)
      .then(response => {
        commit('LOGIN_SUCCESS', response.data.token);
      }).catch(error => {
        commit('LOGIN_FAILED', error);
        return Promise.reject(error)
      });
  },
  logout ({ commit }) {
    UserService.logout();
    commit('LOGOUT');
  }
};

const getters = {
  isAuthenticated: (state) => state.status.loggedIn
};

export default {
  namespaced: true,
  state: initialState,
  mutations,
  actions,
  getters
};

import Vue from "vue";
import Vuex from "vuex";
import AuthApi from "../services/auth.api";
import LocalStorage from '../services/localStorage';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: null,
    token: ''
  },
  mutations: {
    SET_USER(state , profile) {
      state.profile = profile
    },
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  actions: {
    getProfile({ commit, dispatch }) {
      return AuthApi.getProfile()
      .then(({ data }) => {
        commit("SET_USER", data)
      })
      .catch(err => {
        if (err.response.status === 401) {
          dispatch('logout')
        }
      });
    },
    logout({ commit }) {
      commit("SET_USER", null)
      LocalStorage.removeToken()
      location.reload()
    },
    login({ commit }, credential) {
      return AuthApi.login(credential).then(response => {
        commit('SET_TOKEN', response.data.token)
        LocalStorage.setToken(response.data.token);
      })
      .catch(err => {
        throw err
      });
    }
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import AuthApi from "../services/auth.api";
import LocalStorage from '../services/localStorage';
import * as sample from './modules/sample'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sample
  },
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
        return Promise.reject(err)
      });
    },
    logout({ commit }) {
      commit("SET_USER", null)
      LocalStorage.removeToken()
    },
    login({ commit }, credential) {
      return AuthApi.login(credential).then(response => {
        commit('SET_TOKEN', response.data.token)
        LocalStorage.setToken(response.data.token);
      })
      .catch(err => {
        return Promise.reject(err)
      });
    }
  }
});

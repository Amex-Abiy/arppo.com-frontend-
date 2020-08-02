import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        emailToken: localStorage.getItem('emailToken'),
        businessToken: localStorage.getItem('businessToken'),
        localization: localStorage.getItem('lz'),
        authErrorMsg: null
    },
    getters: {
        emailToken: state => state.emailToken,
        businessToken: state => state.businessToken,
        localization: state => state.localization,
        authErrorMsg: state => state.authErrorMsg
    },
    mutations: {
        setEmailToken: (state, payload) => {
            state.emailToken = payload;
        },
        setBusinessToken: (state, payload) => {
            state.businessToken = payload;
        },
        setLocalization: (state, payload) => {
            state.localization = payload;
        },
        setAuthErrorMsg: (state, payload) => {
            state.authErrorMsg = payload;
        }
    },
    actions: {
        loginBusiness: ({ commit }, payload) => {
            axios.post('/business/auth/login', { email: payload.email, password: payload.password }).then((result) => {
                console.log(result.data)
                if (result.data.status) {
                    localStorage.setItem('emailToken', result.data.emailToken)
                    localStorage.setItem('businessToken', result.data.businessToken)
                    localStorage.setItem('lz', result.data.locaization)
                    commit('setAuthErrorMsg', null)
                    commit('setEmailToken', result.data.emailToken)
                    commit('setBusinessToken', result.data.businessToken)
                    commit('setLocalization', result.data.locaization)
                } else {
                    commit('setAuthErrorMsg', result.data.msg)
                }
            }).catch(error => { console.log(error) })
        },
        logout: ({ commit }, payload) => {
            localStorage.removeItem('emailToken')
            localStorage.removeItem('businessToken')
            localStorage.removeItem('lz')
            commit('setAuthErrorMsg', null)
            commit('setEmailToken', null)
            commit('setBusinessToken', null)
            commit('setLocalization', null)
        }
    },
    modules: {}
})
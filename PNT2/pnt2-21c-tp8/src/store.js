import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url: "https://63534baca9f3f34c37506ab3.mockapi.io/personas",
        personas: [],
    },
    actions : {
        getPersonas({commit}){
            commit('getPersonas')
        },
        postPersona({commit}, persona){
            commit('postPersona', persona)
        },
    },
    mutations : {
        async getPersonas(state) {
            try {
              let respuesta = await axios(state.url)
              state.personas = respuesta.data
            } catch (error) { console.error('Error en getPersonas', error.message) }
        },
        async postPersona(state, persona) {
            try {
                await axios.post(state.url, persona, { 'content-type': 'application/json' })
            }
            catch (error) { console.error('Error en postPersona', error.message) }
        },
    }
})
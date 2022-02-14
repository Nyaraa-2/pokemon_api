import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { ADD_POKEMON_IN_BAG, COUNTER, REMOVE_POKEMON } from './storeConstants'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bag: [],
        counter: 1,
    },
    mutations: {
        [ADD_POKEMON_IN_BAG](state, pokemon) {
            state.bag.push(pokemon)
        },
        [REMOVE_POKEMON](state, pokemonToRemove) {
            state.bag = state.bag.filter(
                (pokemon) => pokemon.name !== pokemonToRemove.name
            )
        },
        [COUNTER](state) {
            state.counter++
        },
    },
    getters: {},
    actions: {},
    modules: {},
    plugins: [
        createPersistedState({
            paths: ['bag'],
        }),
    ],
})

import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import { ADD_POKEMON_IN_BAG } from '@/store/storeConstants'
import HomePage from '@/views/HomePage.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HomePage.vue', () => {
    let pokemon
    let mutations
    let store
    let options

    beforeEach(() => {
        pokemon = {
            name: 'Bulbi',
        }
        mutations = {
            [ADD_POKEMON_IN_BAG]: jest.fn(),
        }
        store = new Vuex.Store({
            mutations,
        })
        options = {
            localVue,
            store,
            pokemon,
        }
    })
    describe('addpokemon', () => {
        it('add Pokemon in bag', () => {
            //* arrange
            const wrapper = shallowMount(HomePage, options)
            //*act
            wrapper.vm.addPokemon()
            //*assert
            expect(mutations[ADD_POKEMON_IN_BAG]).toHaveBeenCalled()
        })
    })
})

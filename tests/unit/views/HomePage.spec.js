import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import { gottaCatchEmAll } from '../../../src/services/pokemon'
import HomePage from '@/views/HomePage.vue'
import localesFr from '@/locales/fr.json'

jest.mock('@/services/pokemon', () => ({
    gottaCatchEmAll: jest.fn(async () => {
        return Promise.resolve([{ name: 'pokemon1' }, { name: 'pokemon2' }])
    }),
}))

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueI18n)

describe('HomePage.vue', () => {
    let store
    let options
    let i18n
    beforeEach(() => {
        options = {
            localVue,
            store,
            i18n,
            mocks: {
                $t: jest.fn(),
            },
        }
    })
    describe('HomePage', () => {
        it('get all pokemons', async () => {
            //* arrange
            const wrapper = shallowMount(HomePage, options)

            //*act
            await wrapper.vm.getAllPokemons()

            //*assert
            expect(gottaCatchEmAll).toHaveBeenCalled()
            expect(wrapper.vm.pokemons).toEqual([
                { name: 'pokemon1' },
                { name: 'pokemon2' },
            ])
        }),
            it('should be return the searched pokemon', async () => {
                //* arrange
                const wrapper = shallowMount(HomePage, options)
                //* act
                await wrapper.vm.getAllPokemons()
                wrapper.setData({ search: 'pokemon1' })

                //*assert
                expect(wrapper.vm.search).toBe('pokemon1')
                expect(wrapper.vm.research[0]).toEqual(wrapper.vm.pokemons[0])

                //* set data search
                wrapper.setData({ search: 'poke' })
                expect(wrapper.vm.research).toEqual(wrapper.vm.pokemons)
            })
    })
})

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
  //let mutations
  let store
  let options
  let i18n
  const fr = { fr: localesFr }

  beforeEach(() => {
    // mutations = {
    //   [ADD_POKEMON_IN_BAG]: jest.fn(),
    // }
    // ;(store = new Vuex.Store({
    //   mutations,
    // })),
    i18n = new VueI18n({
      locale: 'fr',
      messages: fr,
    })
    options = {
      localVue,
      store,
      i18n,
    }
  })
  describe('computed', () => {
    it('find a pokemon', () => {
      //* arrange
      const wrapper = shallowMount(HomePage, options)

      //*act => https://fr.vuejs.org/v2/cookbook/unit-testing-vue-components.html
      const data = await wrapper.vm.getAllPokemons()
      wrapper.setData({ search: 'pokemon1' })
      //*assert
      expect(gottaCatchEmAll).toHaveBeenCalled()
      expect(wrapper.vm.pokemons).toEqual([
        { name: 'pokemon1' },
        { name: 'pokemon2' },
      ])
      expect(wrapper.vm.search).toEqual(gottaCatchEmAll[0])
    })
  })
})

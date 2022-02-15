import { createLocalVue, shallowMount } from '@vue/test-utils'
import Navigation from '@/components/Navigation.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)

describe('Navigation.vue', () => {
    let store
    let options
    let state

    beforeEach(() => {
        state = {
            bag: [],
        }
        store = new Vuex.Store({
            state,
        })
        options = {
            vuetify: new Vuetify(),
            localVue,
            store,
        }
    })

    it('dark theme when is activate', () => {
        //* arrange
        const wrapper = shallowMount(Navigation, options)
        //*act
        wrapper.vm.changeTheme()
        //*asset
        expect(wrapper.vm.$vuetify.theme.dark).toBeTruthy()
    })
})

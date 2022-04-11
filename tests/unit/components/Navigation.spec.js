import { createLocalVue, shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import localesFr from "@/locales/fr.json";
const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.use(VueI18n);

describe("Navigation.vue", () => {
  let store;
  let options;
  let state;
  let i18n;
  const fr = { fr: localesFr };

  beforeEach(() => {
    (state = {
      bag: [],
    }),
      (store = new Vuex.Store({
        state,
      })),
      (i18n = new VueI18n({
        locale: "fr",
        messages: fr,
      }));

    options = {
      vuetify: new Vuetify(),
      localVue,
      store,
      i18n,
    };
  });

  it("dark theme when is activate", () => {
    //* arrange
    const wrapper = shallowMount(Navigation, options);
    //*act
    wrapper.vm.changeTheme();
    //*asset
    expect(wrapper.vm.$vuetify.theme.dark).toBeTruthy();
  });
});

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app')

import Vue from 'vue'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconFont: 'fa',
})

new Vue({
  render: h => h(App),
}).$mount('#app')

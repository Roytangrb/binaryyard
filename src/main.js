import Vue from 'vue'
import VueRouter from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconFont: 'fa',
})

Vue.use(VueRouter)

//Define route components.
import HelloWorld from './components/HelloWorld'
import Partners from './components/Partners'
import Enquiry from './components/Enquiry'

//Define some routes
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HelloWorld },
  { path: '/partners', component: Partners },
  { path: '/enquiry', component: Enquiry },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

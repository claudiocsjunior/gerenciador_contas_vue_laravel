import Vue from 'vue'
import './plugins/fontawesome'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

//Imports adicionados
import bootstrapVue from 'bootstrap-vue';
import './assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrapVue,
  render: h => h(App)
}).$mount('#app')

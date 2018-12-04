import Vue from 'vue'
import Cookies from 'js-cookie'
import Toast from '~/assets/js/toast'

Vue.use({
  install(Vue) {
    Vue.prototype.$cookie = Cookies

    Vue.prototype.$toast = Toast
  }
})

import Vue from 'vue'
window.$ = window.JQuery = require('jquery')
require('jquery-ui/ui/widgets/datepicker')
require('jquery-ui-dist/jquery-ui.min.css')

import Dev from './serve.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Dev),
}).$mount('#app')

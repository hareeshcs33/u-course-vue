// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Popover from 'vue-js-popover'
Vue.use(Popover);

import VPopover from 'vue-js-popover'
Vue.use(VPopover, { tooltip: true })

export const eventBus = new Vue();

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

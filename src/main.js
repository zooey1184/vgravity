import Vue from 'vue'
import App from './App.vue'
import vgravity from '../src/lib/index.js'
vgravity(Vue)
new Vue({
  el: '#app',
  render: h => h(App)
})

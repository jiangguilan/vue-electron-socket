import Vue from 'vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'

import VueSocketio from 'vue-socket.io';
import socketio from 'socket.io-client';
Vue.use(VueSocketio,socketio('http://localhost:8888/src/index'));//与服务端链接

import App from './App'
import router from './router'
import store from './store'
window.jQuery = window.$ = require('jquery')

Vue.use(VueCookies)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')


// // In renderer process (web page).
const { ipcRenderer } = require('electron')
Vue.prototype.ipc = ipcRenderer
// console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log(arg) // prints "pong"
// })
// ipcRenderer.send('asynchronous-message', 'ping')
// // ipcRenderer.send('win-min')

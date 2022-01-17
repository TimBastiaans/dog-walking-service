import Vue from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player'
import jquery from 'jquery'
global.$ = jquery

Vue.config.productionTip = false
Vue.component('video-background', VideoBackground);

new Vue({
  render: h => h(App),
}).$mount('#app')

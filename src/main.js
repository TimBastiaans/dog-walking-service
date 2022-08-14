import Vue from 'vue'
import App from './App.vue'
import VideoBackground from 'vue-responsive-video-background-player'
import jquery from 'jquery'
global.$ = jquery
import VueSmoothScroll from 'vue2-smooth-scroll'


Vue.config.productionTip = false
Vue.component('video-background', VideoBackground);
Vue.use(VueSmoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')

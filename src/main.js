import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router'

// import VueScrollTo from 'vue-scrollto'
// Vue.use(VueScrollTo)

createApp(App).use(router,MotionPlugin).mount('#app')

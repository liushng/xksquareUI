import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import"@/assets/scss/reset.scss";
Vue.config.productionTip = false
import chatScroll from './../packages/index'
// 注册组件库
Vue.use(chatScroll)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

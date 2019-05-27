import Vue from 'vue'
import Router from 'vue-router'
import ChatScroll from './components/ChatScroll.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ChatScroll',
      component: ChatScroll
    },
    {
      path: '/TimeAxis',
      name: 'TimeAxis',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "TimeAxis" */ '@/components/TimeAxis.vue')
    }
  ]
})

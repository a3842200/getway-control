import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/login',
      componet: () => import(/* webpackChunkName: "login" */ '../components/pages/Login.vue')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})

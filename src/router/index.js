import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Amigos from '@/components/amigos/Main'
import AuthLogin from '@/components/auth/login/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'AuthLogin',
      component: AuthLogin
    },
    {
      path: '/amigos',
      name: 'Amigos',
      component: Amigos
    }
  ],
  linkActiveClass: 'active'
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import AuthService from '@/shared/auth/auth.service'

Vue.use(VueRouter)

const authService = AuthService()
const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({ routes })

router.beforeEach((to, from, next) => {
  let goNext = true

  if (!to.name) {
    window.location = '/'
  }

  if (to.meta.requiresAuth) {
    goNext = goNext ? authService.isAuthenticated() : goNext
  }

  if (goNext) {
    next()
  } else {
    window.location = '/'
  }
})

export default router

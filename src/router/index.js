import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/store.js'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/developer',
    name: 'Developer',
    component: Home
  },
  {
    path: '/marketer',
    name: 'Marketer',
    component: Home
  },
  {
    path: '/cellist',
    name: 'Cellist',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('SET_ROUTE', to)
  next()
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Developer from '../views/Developer.vue'
import Marketer from '../views/Marketer.vue'
import Cellist from '../views/Cellist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/developer',
    name: 'Developer',
    component: Developer
  },
  {
    path: '/marketer',
    name: 'Marketer',
    component: Marketer
  },
  {
    path: '/cellist',
    name: 'Cellist',
    component: Cellist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

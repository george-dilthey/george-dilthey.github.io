import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Developer from '../views/Developer.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

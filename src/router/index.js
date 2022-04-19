import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/celebs-photos',
    name: 'CelebsPhotos',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Home
  },
  {
    path: '/news',
    name: 'News',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

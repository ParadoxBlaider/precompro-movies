import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Maintenance from '../views/Maintenance.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/celebs-photos',
    name: 'CelebsPhotos',
    component: Maintenance
  },
  {
    path: '/community',
    name: 'Community',
    component: Maintenance
  },
  {
    path: '/movies/coming-soon',
    name: 'ComingSoon',
    component: Maintenance
  },
  {
    path: '/movies/charts',
    name: 'Charts',
    component: Maintenance
  },
  {
    path: '/movies/tv-series',
    name: 'TvSeries',
    component: Maintenance
  },
  {
    path: '/movies/trailers',
    name: 'Trailers',
    component: Maintenance
  },
  {
    path: '/movies/more',
    name: 'More',
    component: Maintenance
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

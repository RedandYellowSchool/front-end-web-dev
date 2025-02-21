import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'
import About from '@/views/AboutPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home,
    meta: { title: 'Home Page' }
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: About,
    meta: { title: 'About Us' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Global navigation guard to update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'My Vue App'
  next()
})

export default router

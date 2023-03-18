import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/components/NotFound.vue'
import Counter from '@/components/CounterDisplay.vue'
import HomePage from '@/components/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/counter', component: Counter },
  { path: '/:catchAll(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

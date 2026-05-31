import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
  {
    path: '/publications',
    name: 'publications',
    component: () => import('../views/PublicationsView.vue'),
    meta: { title: 'Publications' },
  },
  {
    path: '/cv',
    name: 'cv',
    component: () => import('../views/CvView.vue'),
    meta: { title: 'CV' },
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/LifeView.vue'),
    meta: { title: 'My Life' },
  },
  // Unknown paths fall back to home.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Yutian Zhang'
  document.title = to.meta?.title ? `${base} | ${to.meta.title}` : base
})

export default router

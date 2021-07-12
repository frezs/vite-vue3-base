import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'home'
    }
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
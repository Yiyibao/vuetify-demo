// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/test/button',
        name: 'button',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Button.vue'),
      },
      {
        path: '/test/card',
        name: 'card',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Card.vue'),
      },
      {
        path: '/table/firstTable',
        name: 'firstTable',
        component: () => import(/* webpackChunkName: "home" */ '@/views/FirstTable.vue'),
      },
      {
        path: '/table/firstEcharts',
        name: 'firstEcharts',
        component: () => import(/* webpackChunkName: "home" */ '@/views/FirstEcharts.vue'),
      },
      {
        path: '/table/secondEcharts',
        name: 'secondEcharts',
        component: () => import(/* webpackChunkName: "home" */ '@/views/SecondEcharts.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

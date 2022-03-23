import { createRouter, createWebHashHistory } from 'vue-router'

const Cart = () => import('@/views/Cart.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Cart',
      component: Cart
    }
  ]
})

export default router

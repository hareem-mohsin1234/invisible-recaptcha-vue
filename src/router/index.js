import { createRouter, createWebHistory } from 'vue-router'
import HomeContainer from '../containers/HomeContainer.vue'
import ContactContainer from '../containers/ContactContainer.vue'
import PaymentContainer from '../containers/PaymentContainer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeContainer
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactContainer
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentContainer
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

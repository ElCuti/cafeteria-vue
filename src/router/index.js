import { createRouter, createWebHistory } from 'vue-router'

import InicioView from '../views/InicioView.vue'
import CartaView from '../views/CartaView.vue'
import ContactoView from '../views/ContactoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', 
      name: 'inicio',
      component: InicioView 
    },
    {
      path: '/carta', 
      name: 'carta',
      component: CartaView 
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: ContactoView
    }
  ]
})

export default router
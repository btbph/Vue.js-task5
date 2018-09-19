import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Cart from '@/views/Cart'

import Index from '@/views/admin/Index'
import New from '@/views/admin/New'
import Products from '@/views/admin/Products'
import Edit from '@/views/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin',
      component: Index,

      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]

    },
    {
      path: '/cart',
      name:'Cart',
      component: Cart
    }
  ]
})

import Vue from 'vue'
import Vuex from 'vuex'

import { productMutations, cartMutations, manufacturerMutations } from '@/store/mutations'
import { manufacturerActions, productActions } from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: []
  },
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  actions:  Object.assign({}, productActions, manufacturerActions),
  getters: {
    allProducts: state => state.products,
    // Get Product by ID
    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id === id)[0]
      } else {
        return state.product
      }
    },
    allManufacturers: state => state.manufacturers
  }
})

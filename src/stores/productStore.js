import { defineStore } from 'pinia'
import { getProductsAll } from '@/api/product'

export const useProductStore = defineStore('productStore', {
  state: () => {
    return {
      productList: []
    }
  },
  getters: {
    sortProducts: (state) => state.productList.sort((a, b) => a.price - b.price)
  },
  actions: {
    getProducts() {
      getProductsAll().then((data) => {
        this.productList = data.products
      })
    }
  }
})
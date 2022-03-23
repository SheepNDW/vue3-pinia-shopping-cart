import { defineStore } from 'pinia'
import { deleteCart, getCartList, insertCart, updateCart } from '@/api/cart'
import { useStatusStore } from './statusStore'

const status = useStatusStore()

export const useCartStore = defineStore('cartStore', {
  state: () => {
    return {
      cartData: {
        carts: [],
        final_total: 0,
        total: 0
      }
    }
  },
  actions: {
    // 取得購物車
    getCarts() {
      getCartList().then((res) => {
        this.cartData = res.data
      })
    },
    // 加入購物車
    addToCart(id, qty = 1) {
      status.loadingItem = id
      insertCart(id, qty).then(() => {
        status.pushMessage({ title: '加入購物車成功' })
        this.getCarts()
        status.loadingItem = ''
      })
    },

    // 更新數量
    updateCartInfo(item) {
      status.loadingItem = item.id
      const reqParams = {
        productId: item.id,
        count: item.qty
      }
      updateCart(reqParams).then(() => {
        status.pushMessage({ title: '更新數量成功' })
        this.getCarts()
        status.loadingItem = ''
      })
    },

    // 刪除
    removeCartItem(id) {
      status.loadingItem = id
      deleteCart(id).then(() => {
        status.pushMessage({ title: '已成功刪除這項商品', style: 'danger' })
        this.getCarts()
        status.loadingItem = ''
      })
    }
  }
})
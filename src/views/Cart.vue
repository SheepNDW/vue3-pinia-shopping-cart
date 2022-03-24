<script>
import { computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useCartStore } from '@/stores/cartStore'
import { useStatusStore } from '@/stores/statusStore'
export default {
  name: 'Cart',
  setup() {
    // 取得所有商品列表
    const productStore = useProductStore()
    const productList = computed(() => productStore.sortProducts)
    productStore.getProducts()

    // 取得購物車內容
    const cartStore = useCartStore()
    const cartData = computed(() => cartStore.cartData)
    cartStore.getCarts()

    // 記錄當前狀態
    const statusStore = useStatusStore()
    const loadingItem = computed(() => statusStore.loadingItem)

    return {
      cartData,
      productList,
      loadingItem,
      addToCart: cartStore.addToCart,
      updateCartInfo: cartStore.updateCartInfo,
      removeCartItem: cartStore.removeCartItem
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="row mt-4">
      <!-- 產品列表 -->
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-if="productList">
            <tr v-for="item in productList" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>{{ item.title }}</td>
              <td>
                <div class="h5">現在只要 {{ item.price }} 元</div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="loadingItem === item.id"
                    @click="addToCart(item.id)"
                  >
                    <span
                      class="spinner-border spinner-grow-sm"
                      v-if="loadingItem === item.id"
                    ></span>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cartData">
                <tr v-for="item in cartData.carts" :key="item.id">
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-danger btn-sm"
                      :disabled="loadingItem === item.id"
                      @click="removeCartItem(item.id)"
                    >
                      x
                    </button>
                  </td>
                  <td>
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <div class="input-group input-group-sm">
                      <input
                        type="number"
                        class="form-control"
                        :disabled="loadingItem === item.id"
                        v-model.number="item.qty"
                        @change="updateCartInfo(item)"
                      />
                      <div class="input-group-text">
                        / {{ item.product.unit }}
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    <small
                      v-if="cartData.final_total !== cartData.total"
                      class="text-success"
                      >折扣價：</small
                    >
                    {{ item.final_total }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <template v-if="cartData">
                <tr>
                  <td colspan="3" class="text-end">總計</td>
                  <td class="text-end">{{ cartData.total }}</td>
                </tr>
                <tr v-if="cartData.final_total !== cartData.total">
                  <td colspan="3" class="text-end text-success">折扣價</td>
                  <td class="text-end text-success">
                    {{ cartData.final_total }}
                  </td>
                </tr>
              </template>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

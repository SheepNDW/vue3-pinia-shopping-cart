import request from '@/utils/request'
const path = `${import.meta.env.VITE_API_PATH}`

/**
 * 取得購物車列表
 * @returns Promise
 */
export const getCartList = () => {
  return request(`/api/${path}/cart`, 'get')
}

/**
 * 加入購物車
 * @param {String} prodcutId - 產品id
 * @param {Integer} count - 數量
 * @returns Promise
 */
export const insertCart = (prodcutId, count) => {
  return request(`/api/${path}/cart`, 'post', { data: { product_id: prodcutId, qty: count } })
}

/**
 * 刪除購物車中的產品
 * @param {String} id - carts.id
 * @returns Promise
 */
export const deleteCart = (id) => {
  return request(`/api/${path}/cart/${id}`, 'delete')
}

/**
 * 修改購物車產品數量
 * @param {String} productId - 產品id
 * @param {Integer} count - 數量
 * @returns Promise
 */
export const updateCart = ({ productId, count }) => {
  return request(`/api/${path}/cart/${productId}`, 'put', { data: { product_id: productId, qty: count } })
}
import {
  ADD_TO_CART,
  INCREMENT_IN_CART
} from './mutations-types'

export default {
  /**
   * 为已有商品的数量加1
   * @param state
   * @param payload
   */
  [INCREMENT_IN_CART](state, payload) {
    var prod = state.cartProductList.find(item => item.pid === payload.pid);
    prod.count++
  },

  /**
   * 把商品加入购物车，假设该商品不在购物车里
   * @param state
   * @param payload
   */
  [ADD_TO_CART](state, payload) {
    payload.count = 1;
    payload.checked = true
    state.cartProductList.push(payload);
  }
}

import {
  ADD_TO_CART,
  INCREMENT_IN_CART
} from './mutations-types'

export default {
  addToCart({state, commit}, payload) {
    return new Promise((resolve, reject) => {
      var prod = state.cartProductList.find(item => item.pid === payload.pid);
      if (prod) {
        commit(INCREMENT_IN_CART, payload);
        resolve("为已添加商品数量加1")
      } else {
        commit(ADD_TO_CART, payload);
        resolve("增加新的商品")
      }
    })

  }
}

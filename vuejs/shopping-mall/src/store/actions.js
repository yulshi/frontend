import {
  ADD_TO_CART,
  INCREMENT_IN_CART
} from './mutations-types'

export default {
  addToCart({state, commit}, payload) {
    var prod = state.cartProductList.find(item => item.pid === payload.pid);
    if (prod) {
      commit(INCREMENT_IN_CART, payload);
    } else {
      commit(ADD_TO_CART, payload);
    }
  }
}

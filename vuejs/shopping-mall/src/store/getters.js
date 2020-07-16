export default {

  prodCountInCart(state) {
    return state.cartProductList
      .map(prod => prod.count)
      .reduce((prev, curr) => prev + curr, 0);

  },

  productsInCart(state) {
    return state.cartProductList;
  }

}

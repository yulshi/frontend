<template>
  <div id="shopping-cart">
    <nav-bar class="shopping-cart-navbar">
      <div slot="center">
        购物车（{{prodCountInCart}}）
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {mapGetters} from 'vuex';

  export default {
    name: "ShoppingCart",
    components: {
      NavBar
    },
    computed: {
      ...mapGetters([
        "prodCountInCart",
        "productsInCart"
      ])
    }
  }
</script>

<style scoped>

  .shopping-cart-navbar {
    background-color: var(--color-tint);
    color: #fff;
  }

</style>

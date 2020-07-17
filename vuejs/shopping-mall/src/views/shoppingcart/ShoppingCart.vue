<template>
  <div id="shopping-cart">
    <nav-bar class="shopping-cart-navbar">
      <div slot="center">
        购物车（{{prodCountInCart}}）
      </div>
    </nav-bar>
    <scroll class="scroll-content" ref="scroll">
      <product-list :item-list="productsInCart"/>
    </scroll>
    <bottom-bar :item-list="productsInCart"/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import {mapGetters} from 'vuex';
  import Scroll from "../../components/common/scroll/Scroll";
  import ProductList from "./comp/ProductList";
  import BottomBar from "./comp/BottomBar";

  export default {
    name: "ShoppingCart",
    components: {
      BottomBar,
      ProductList,
      Scroll,
      NavBar
    },
    computed: {
      ...mapGetters([
        "prodCountInCart",
        "productsInCart"
      ])
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>

  #shopping-cart {
    height: 100vh;
  }

  .shopping-cart-navbar {
    background-color: var(--color-tint);
    color: #fff;
  }

  .scroll-content {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }

</style>

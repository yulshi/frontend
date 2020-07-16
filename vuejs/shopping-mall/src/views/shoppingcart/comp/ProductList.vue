<template>
  <div id="product-list">
    <div v-if="itemList.length !== 0">
      <product-list-item v-for="item in itemList" :item="item"/>
    </div>
    <div v-else class="empty-cart">
      <span>购物车为空</span>
    </div>
  </div>
</template>

<script>
  import ProductListItem from "./ProductListItem";

  export default {
    name: "ProductList",
    components: {ProductListItem},
    props: {
      itemList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .empty-cart {
    text-align: center;
    font-size: 26px;
    margin-top: 20px;
  }

</style>

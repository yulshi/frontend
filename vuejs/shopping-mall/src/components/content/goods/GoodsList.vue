<template>
  <div class="goods-wrapper">
    <goods-list-item v-for="item in goods" :item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props: {
      goods: Array,
      default() {
        return []
      }
    }
  }
</script>

<style scoped>
  .goods-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
</style>

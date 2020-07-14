<template>
  <div class="goods-item">
    <img :src="item.show.img" :alt="item.title" @load="imgLoad"/>
    <div>
      <p class="item-title">{{item.title}}</p>
      <span>{{item.price}}</span>
      <span>{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit("imgLoaded");
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
  }
  .goods-item img {
    border-radius: 5px;
    width: 100%;
  }
</style>

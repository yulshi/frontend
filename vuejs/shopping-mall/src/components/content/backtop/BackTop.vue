<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="back">
  </div>
</template>

<script>
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "BackTop"
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 55px;
    z-index: 999;
    border-radius: 50%;
    height: 43px;
    line-height: 43px;
    width: 43px;
  }

  .back-top img {
    width: 100%;
    vertical-align: middle;
  }
</style>

<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tabbar {
    height: 49px;
    background-color: #f6f6f6;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
    -moz-box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
    box-shadow: 0px -1px 1px rgba(100,100,100,0.2);
    z-index: 999;
  }
</style>

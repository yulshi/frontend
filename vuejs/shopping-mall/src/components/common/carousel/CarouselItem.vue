<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "CarouselItem"
  }
</script>

<style scoped>
  .carousel-item {
    width: 100%;
    height: 300px;
    flex: none;
  }

  .carousel-item img {
    height: 100%;
  }
</style>

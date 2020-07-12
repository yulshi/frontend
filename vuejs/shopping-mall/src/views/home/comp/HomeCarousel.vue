<template>
  <div>
    <carousel>
      <carousel-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop1.webp">
        </a>
      </carousel-item>
      <carousel-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop2.webp">
        </a>
      </carousel-item>
      <carousel-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop3.webp">
        </a>
      </carousel-item>
      <carousel-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop4.webp">
        </a>
      </carousel-item>
      <carousel-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop5.webp">
        </a>
      </carousel-item>
    </carousel>
  </div>
</template>

<script>
  import {Carousel, CarouselItem} from "components/common/carousel";
  export default {
    name: "HomeCarousel",
    components: {
      Carousel,
      CarouselItem
    }
  }
</script>

<style scoped>

</style>

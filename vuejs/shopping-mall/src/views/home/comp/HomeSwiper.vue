<template>
  <div>
    <swiper>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop1.webp">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop2.webp">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop3.webp">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop4.webp">
        </a>
      </swiper-item>
      <swiper-item>
        <a href="javascript:;">
          <img src="~assets/img/carousel/loop5.webp">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from "components/common/swiper";
  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>

<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  import HomeCarousel from "./comp/HomeCarousel";
  import HomeSwiper from "./comp/HomeSwiper";

  export default {
    name: "Home",
    components: {
      HomeSwiper,
      HomeCarousel,
      NavBar
    }
  }
</script>

<style scoped>
  .home-navbar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>

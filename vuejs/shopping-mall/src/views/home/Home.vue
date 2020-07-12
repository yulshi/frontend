<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper></home-swiper>
    <home-recommand/>
    <tab-control :titles="['流行', '新款', '精选']" @click-tab="tabControlClick"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";

  import HomeCarousel from "./comp/HomeCarousel";
  import HomeSwiper from "./comp/HomeSwiper";
  import HomeRecommand from "./comp/HomeRecommand";

  export default {
    name: "Home",
    components: {
      TabControl,
      NavBar,
      HomeRecommand,
      HomeSwiper,
      HomeCarousel
    },
    methods: {
      tabControlClick(index) {
        console.log("the selected tab-control index is" , index);
      }
    }
  }
</script>

<style scoped>
  #home {
    margin-bottom: 60px;
    margin-top: 44px
  }
  .home-navbar {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
  }
</style>

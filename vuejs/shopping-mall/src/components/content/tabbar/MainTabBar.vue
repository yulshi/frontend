<template>
  <div>
    <tab-bar>
      <tab-bar-item link="/home">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <span slot="item-title">首页</span>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active">
        <span slot="item-title">种类</span>
      </tab-bar-item>
      <tab-bar-item link="/shoppingcart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="item-icon">
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
        <span slot="item-title">购物车</span>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active">
        <span slot="item-title">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>

  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>

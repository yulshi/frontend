<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div class="bottom-item">
        <i class="icon icon-custom-service"></i>
        <span>客服</span>
      </div>
      <div class="bottom-item">
        <i class="icon icon-shop"></i>
        <span>店铺</span>
      </div>
      <div class="bottom-item">
        <i class="icon icon-fav"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-right">
      <div class="shopping-cart">
        <span>加入购物车</span>
      </div>
      <div class="purchase">
        <span>购买</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar"
  }
</script>

<style scoped>
  .bottom-bar {
    height: 64px;
    background-color: #fff;
    display: flex;
  }

  .bottom-left, .bottom-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .bottom-item {
    flex: 1;
    text-align: center;
  }

  .bottom-item .icon {
    display: block;
    width: 35px;
    height: 35px;
    background-image: url("~assets/img/detail/detail_bottom.png");
    background-size: cover;
    margin: 3px auto;
  }

  .bottom-item .icon-custom-service {
    background-position: 0 155px;
  }

  .bottom-item .icon-shop {
    background-position: 0 80px;
  }

  .bottom-item .icon-fav {
    background-position: 0 0px;
  }


  .shopping-cart,
  .purchase {
    line-height: 64px;
    flex: 1;
    text-align: center;
  }

  .shopping-cart {
    background-color: #ffff00;
  }

  .purchase {
    background-color: #ff6700;
    color: #ffffff;
  }


</style>

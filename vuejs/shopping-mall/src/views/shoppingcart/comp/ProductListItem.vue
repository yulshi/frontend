<template>
  <div class="cart-list-item">
    <div class="check-wrapper">
      <check-button :active="checked" @checkClick="checkClick"/>
    </div>
    <div class="item-wrapper">
      <img src="~assets/img/carousel/loop4.webp">
      <div class="item-detail">
        <h2>{{item.pid}}</h2>
        <p>{{item.title}}</p>
        <div class="item-price">
          <span>{{item.price | currency}}</span>
          <span>x{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/check-button/CheckButton";
  export default {
    name: "ProductListItem",
    components: {CheckButton},
    data() {
      return {
        checked: false
      }
    },
    props: {
      item: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      currency(value) {
        return '¥ ' + value
      }
    },
    methods: {
      checkClick() {
        this.checked = !this.checked
      }
    }
  }
</script>

<style scoped>

  .cart-list-item {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid #aaa;
  }

  .check-wrapper {
    align-self: center;
  }

  .item-wrapper {
    flex: 1;
    display: flex;
  }

  .item-wrapper img {
    width: 100px;
    height: 130px;
    border-radius: 5px;
  }

  .item-detail {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }

  .item-price {
    display: flex;
    justify-content: space-between;
  }

  .item-price span {
    font-size: 20px;
  }

  .item-price span:first-of-type {
    color: var(--color-tint);
  }

</style>

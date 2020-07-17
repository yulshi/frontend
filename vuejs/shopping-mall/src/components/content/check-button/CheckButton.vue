<template>
  <div class="check-button" :class="{active: checked}">
    <img src="~assets/img/cart/tick.svg" alt="tick">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      checked: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>

  .check-button {
    width: 20px;
    height: 20px;
    margin: 4px;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-button img {
    width: 100%;
  }

  .check-button.active {
    background-color: #f00;
    border: 2px solid #f00;
  }

</style>

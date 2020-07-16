<template>
  <div class="check-button"
       :class="{active: active}"
       @click="checkClick">
    <img src="~assets/img/cart/tick.svg" alt="tick">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props: {
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      checkClick() {
        this.$emit('checkClick')
      }
    }
  }
</script>

<style scoped>

  .check-button {
    width: 25px;
    height: 25px;
    margin: 4px;
    border-radius: 50%;
    border: 2px solid #aaa;
  }

  .check-button img {
    width: 100%;
    vertical-align: middle;
  }

  .check-button.active {
    background-color: #f00;
    border: 2px solid #f00;
  }

</style>

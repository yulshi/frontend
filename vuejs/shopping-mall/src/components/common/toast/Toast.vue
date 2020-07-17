<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, duration = 2000) {
        this.message = message;
        this.isShow = true
        window.setTimeout(() => {
          this.message = '';
          this.isShow = false;
        }, duration)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    line-height: 30px;
    min-width: 200px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 10px;
    color: #fff;
    z-index: 9999;
    padding: 10px;
    text-align: center;
  }
</style>

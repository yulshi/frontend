<template>
  <div class="simple-trans">
    <button @click="btnClick">
      Switch
    </button>
    <transition name="fade" appear>
      <p class="message" v-if="show">This message can be faded in/out</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "SimpleTransition",
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      btnClick: function (e) {
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: scale(0);
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }

  .message {
    font-size: 2rem;
  }

</style>
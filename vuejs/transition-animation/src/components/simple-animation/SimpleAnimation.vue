<template>
  <div class="simple-animation">
    <button @click="show = !show">Animate</button>
    <transition appear name="ani-message"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled">
      <p v-if="show" class="message">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris facilisis enim libero, at lacinia diam fermentum id.
        Pellentesque habitant morbi tristique senectus et netus.
      </p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "SimpleAnimation",
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.color = 'red';
        el.style.backgroundColor = '#aaa'
      },
      enter: function (el) {
        el.style.backgroundColor = '#bfa'
      },
      afterEnter: function (el) {
        el.style.color = 'yellow'
        el.style.backgroundColor = '#00f'
      },
      enterCancelled: function (el) {
        console.log("enter is cancelled")
      }
    }
  }
</script>

<style scoped>

  .ani-message-enter-active {
    animation: ani-show 1s;
  }

  .ani-message-leave-active {
    animation: ani-show 1s reverse;
  }

  @keyframes ani-show {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.5);
    }

    100% {
      transform: scale(0.8);
    }
  }

  .message {
    transform: scale(0.8);
  }


</style>
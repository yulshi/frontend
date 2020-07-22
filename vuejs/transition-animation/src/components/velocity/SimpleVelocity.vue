<template>
  <div class="simple-velocity">
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="velocity-transition"
                appear
                :css="false"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @leave="leave">
      <p v-if="show">Demo</p>
    </transition>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate';

  export default {
    name: "SimpleVelocity",
    data: function () {
      return {
        show: true
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
        el.style.transformOrigin = 'left'
      },
      enter(el, done) {
        Velocity(el, {opacity: 1, fontSize: '1.4em'}, {duration: 300, easing: [ 250, 15 ]})
        Velocity(el, {fontSize: '1em'}, {complete: done})
      },
      afterEnter: function (el) {
        // el.style.opacity = 1
      },
      leave(el, done) {
        Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
        Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
        Velocity(el, {
          rotateZ: '45deg',
          translateY: '30px',
          translateX: '30px',
          opacity: 0
        }, { complete: done })
      }
    }
  }
</script>

<style scoped>

</style>
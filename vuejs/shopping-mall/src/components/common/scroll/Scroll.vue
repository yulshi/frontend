<template>
  <div class="scroll-wrapper" ref="scrollWrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        probeType: 3,
        pullUpLoad: true,
        click: true
      });

      this.scroll.on("pullingDown", () => {
        window.setTimeout(() => {
          this.scroll.finishPullDown();
        }, 1000);
      })
    }
  }
</script>

<style scoped>

</style>

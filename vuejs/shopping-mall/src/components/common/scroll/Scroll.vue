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
    props: {
      monitorScroll: {
        type: Boolean,
        default: false
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {

      this.scroll = new BScroll(this.$refs.scrollWrapper, {
        probeType: this.monitorScroll ? 3 : 0, // 当pullingDown启用时，永远是3
        pullUpLoad: this.pullUpLoad,
        click: true
      });

      // 监听上拉加载更多
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      })

      // 监听滚动事件
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      })
    },
    methods: {
      scrollTo(x, y, duration) {
        this.scroll.scrollTo(x, y, duration);
      },
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>

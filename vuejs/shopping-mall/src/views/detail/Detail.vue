<template>
  <div id="product-detail">
    <detail-nav-bar @titleClick="titleClick" ref="navbar"/>
    <scroll class="scroll-content"
            ref="scroll"
            :monitor-scroll="true"
            @scroll="processScroll">
      <product-desc ref="productDesc"/>
      <product-params ref="productParams"/>
      <product-comments ref="productComments"/>
      <product-recommand ref="productRecommand"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="showBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from "./comp/DetailNavBar";
  import ProductDesc from "./comp/ProductDesc";
  import ProductParams from "./comp/ProductParams";
  import ProductComments from "./comp/ProductComments";
  import ProductRecommand from "./comp/ProductRecommand";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "../../components/content/backtop/BackTop";

  export default {
    name: "Detail",
    components: {
      BackTop,
      Scroll,
      ProductRecommand,
      ProductComments,
      ProductParams,
      ProductDesc,
      DetailNavBar
    },
    data() {
      return {
        pid: null,
        showBackTop: false,
        offsetTops: [],
        currentTitleIndex: 0
      }
    },
    created() {
      this.pid = this.$route.params.pid;
    },
    mounted() {
      // 注意：在没有数据加载以及图片的情况下，可以在mounted里面计算offsetTop
      // 但是如果不是这种情况，需要在合适的位置进行计算
      this.offsetTops = [];
      this.offsetTops.push(this.$refs.productDesc.$el.offsetTop - 44)
      this.offsetTops.push(this.$refs.productParams.$el.offsetTop - 44)
      this.offsetTops.push(this.$refs.productComments.$el.offsetTop - 44)
      this.offsetTops.push(this.$refs.productRecommand.$el.offsetTop - 44)
      this.offsetTops.push(Number.MAX_VALUE)
    },
    methods: {
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -(this.offsetTops[index]), 500);
      },
      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      processScroll(position) {
        this.showBackTop = position.y < -500
        // 当滚动到某个主题时，对应的标题高亮显示
        const y = -position.y;
        for (let i = 0; i < this.offsetTops.length - 1; i++) {
          if (this.currentTitleIndex != i &&
            (y >= this.offsetTops[i] && y < this.offsetTops[i + 1])) {
            this.currentTitleIndex = i;
            this.$refs.navbar.currentIndex = this.currentTitleIndex;
          }
        }
      }
    }
  }
</script>

<style scoped>
  #product-detail {
    height: 100vh;
    position: relative;
    z-index: 9999;
    background-color: #fff;
  }

  .scroll-content {
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>

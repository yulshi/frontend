<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @click-tab="tabControlClick"
      class="tab-control-placeholder"
      v-show="tabControlfixed"
      ref="placeHolderTabControl"/>
    <scroll class="scroll-content" ref="scroll"
            :monitorScroll="true"
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <!--    <home-swiper/>-->
      <home-carousel @imgLoaded="carouselImgLoaded"/>
      <home-recommand @imgLoaded="recommandImgLoaded"/>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @click-tab="tabControlClick"
        ref="scrolledTabControl"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <back-top @click.native="backTopClick" v-show="showBackTop"/>
  </div>

</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabcontrol/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import HomeCarousel from "./comp/HomeCarousel";
  import HomeSwiper from "./comp/HomeSwiper";
  import HomeRecommand from "./comp/HomeRecommand";

  import {debounce, throttle} from "../../common/utils";
  import {backTopMixin} from '../../common/mixin';

  export default {
    name: "Home",
    data() {
      return {
        goods: {
          popular: {
            page: 1,
            list: [
              {
                show: {
                  img: 'http://localhost:8080/img/loop1.2014062d.webp'
                },
                title: 'title1',
                cfav: 62,
                price: 99.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop2.9ce1a997.webp'
                },
                title: 'title2',
                cfav: 0,
                price: 299.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title3',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title4',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title5',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title6',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title7',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title8',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title9',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title10',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title11',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title12',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title13',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title14',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title15',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title16',
                cfav: 19,
                price: 199.99
              }
              ,
              {
                show: {
                  img: 'http://localhost:8080/img/loop3.84609577.webp'
                },
                title: 'title17',
                cfav: 19,
                price: 199.99
              },
              {
                show: {
                  img: 'http://localhost:8080/img/loop4.b1b7f58a.webp'
                },
                title: 'title18',
                cfav: 19,
                price: 199.99
              }
            ]
          },
          brandnew: {
            page: 1, list: [{
              show: {
                img: 'http://localhost:8080/img/loop1.2014062d.webp'
              },
              title: 'title19',
              cfav: 62,
              price: 99.99
            },
              {
                show: {
                  img: 'http://localhost:8080/img/loop2.9ce1a997.webp'
                },
                title: 'title20',
                cfav: 0,
                price: 299.99
              }]
          },
          feature: {page: 0, list: []}
        },
        currentGoodsType: 'popular',
        tabControlfixed: false,
        tabControlOffsetTop: 0,
        currentScrollY: 0
      }
    },
    created() {
      console.log("loading data from network...")
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 300);
      this.$bus.$on("imgLoaded", () => {
        refresh();
      })
    },
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.currentScrollY, 0);
    },
    deactivated() {
      this.currentScrollY = this.$refs.scroll.getPositionY();
    },
    computed: {
      showGoods() {
        return this.goods[this.currentGoodsType].list
      }
    },
    components: {
      Scroll,
      GoodsList,
      TabControl,
      NavBar,
      HomeRecommand,
      HomeSwiper,
      HomeCarousel
    },
    mixins: [backTopMixin],
    methods: {
      tabControlClick(index) {
        switch (index) {
          case 0:
            this.currentGoodsType = 'popular'
            break;
          case 1:
            this.currentGoodsType = 'brandnew';
            break;
          case 2:
            this.currentGoodsType = 'feature';
            break;
        }
        this.$refs.placeHolderTabControl.currentIndex = index;
        this.$refs.scrolledTabControl.currentIndex = index;
      },
      carouselImgLoaded() {
        const tabControlElement = this.$refs.scrolledTabControl.$el;
        this.tabControlOffsetTop = tabControlElement.offsetTop - tabControlElement.offsetHeight;
        // console.log(this.tabControlOffsetTop)
      },
      recommandImgLoaded() {
        this.carouselImgLoaded();
      },
      contentScroll(position) {
        this.onBackTop(position)
        this.tabControlfixed = -position.y >= this.tabControlOffsetTop ? true : false;
      },

      /**
       * 当滚动到最底下的位置时，模拟加载更多数据
       */
      loadMore() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("loading more data...")
            resolve("pseude data");
          }, 1000)
        }).then(res => {
          console.log("pseudo data is loaded")
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    /*padding-top: 44px;*/
    padding-bottom: 0;
    height: 100vh;
  }

  .home-navbar {
    background-color: var(--color-tint);
    color: #ffffff;
    /*position: fixed;*/
    /*top: 0;*/
    /*z-index: 9999;*/
    /*width: 100%;*/
  }

  .scroll-content {
    overflow: auto;
    height: calc(100% - 49px);
  }

  .tab-control-placeholder {
    position: absolute;
    z-index: 999;
    width: 100%;
  }
</style>

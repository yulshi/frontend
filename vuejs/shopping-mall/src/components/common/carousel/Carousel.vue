<template>
  <div id="carousel">
    <div class="carousel-items-wrapper" :style="itemsWrapperStyle">
      <slot></slot>
    </div>
    <ul v-if="showIndicator" class="indicator">
      <li v-for="count in numOfItems">
        <a href="javascript:;"
           @click="clickIndicator(count-1)"
           :class="{active: currentIndex === count - 1}"></a>
      </li>
    </ul>
    <div class="left-arrow" @click="slideToLeftByOne">
      <span></span>
      <span></span>
    </div>
    <div class="right-arrow" @click="slideToRightByOne">
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        loopTimer: null,
        slideTimer: null,
        numOfItems: 0,
        currentIndex: 0,
        itemWidth: 300,
        itemsWrapperStyle: {},
      }
    },
    props: {
      stopInterval: {
        type: Number,
        default: 2000
      },
      showIndicator: {
        type: Boolean,
        default: true
      },
      animationDuration: {
        type: Number,
        default: 0.5
      }
    },
    computed: {},
    beforeDestroy() {
      clearInterval(this.loopTimer)
      clearInterval(this.slideTimer)
    },
    mounted() {
      this.init();
      this.autoSlide();
    },
    methods: {

      init() {
        const carouselItemWrapper = document.querySelector('.carousel-items-wrapper');
        this.itemWidth = carouselItemWrapper.offsetWidth;
        const carouselItems = document.querySelectorAll('.carousel-item');
        this.numOfItems = carouselItems.length;
        if (carouselItems.length > 1) {
          const firstItemClone = carouselItems[0].cloneNode(true);
          const lastItemClone = carouselItems[carouselItems.length - 1].cloneNode(true);
          carouselItemWrapper.appendChild(firstItemClone);
          carouselItemWrapper.insertBefore(lastItemClone, carouselItems[0]);
        }
        this.itemsWrapperStyle = {
          transform: `translateX(${-1 * this.itemWidth + 'px'})`
        }
      },

      /**
       * Move to the item with the specified index
       * @param index
       */
      moveTo(index) {
        this.itemsWrapperStyle = {
          transition: `transform ${this.animationDuration}s`,
          transform: `translateX(${-(1 + index) * this.itemWidth + 'px'})`
        }
        this.currentIndex = index;

        // 校准位置，必须使用setTimeout来延迟执行
        setTimeout(() => {
          this.itemsWrapperStyle.transition = '0s'
          if (index < 0) {
            this.currentIndex = this.numOfItems - 1;
            this.itemsWrapperStyle = {
              transform: `translateX(${-this.numOfItems * this.itemWidth + 'px'})`
            }
          } else if (index >= this.numOfItems) {
            this.currentIndex = 0;
            this.itemsWrapperStyle = {
              transform: `translateX(${-this.itemWidth + 'px'})`
            }
          }
        }, this.animationDuration * 1000)
      },

      clickIndicator(index) {
        this.moveTo(index);
        clearInterval(this.loopTimer)
        this.autoSlide()
      },

      slideToLeftByOne() {
        this.clickIndicator(this.currentIndex - 1);
      },

      slideToRightByOne() {
        this.clickIndicator(this.currentIndex + 1);
      },

      autoSlide() {
        this.loopTimer = setInterval(() => {
          this.moveTo(this.currentIndex + 1);
        }, this.stopInterval)
      }
    }
  }

</script>

<style scoped>
  #carousel {
    position: relative;
    overflow: hidden;
  }

  .carousel-items-wrapper {
    background-color: #000;
    display: flex;
    flex-flow: row nowrap;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .indicator {
    height: 20px;
    width: 125px;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: 999;
  }

  .indicator li {
    float: left;
  }

  .indicator li a {
    display: block;
    width: 15px;
    height: 15px;
    background-color: #bfa;
    border-radius: 50%;
    margin: 0 5px;
  }

  .indicator li a.active {
    background-color: #000;
  }

  #carousel .left-arrow,
  #carousel .right-arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    z-index: 999;
  }

  #carousel .left-arrow:hover,
  #carousel .right-arrow:hover {
    background-color: rgba(0, 0, 0, .5);
  }

  #carousel .left-arrow {
    left: 0;
  }

  #carousel .left-arrow span,
  #carousel .right-arrow span {
    display: block;
    background-color: #ff0;
    height: 2px;
    width: 70%;
    position: absolute;
  }

  #carousel .left-arrow span:first-of-type {
    top: 0;
    transform: rotateZ(-45deg);
    transform-origin: right;
  }

  #carousel .left-arrow span:last-of-type {
    bottom: 0;
    transform: rotateZ(45deg);
    transform-origin: right;
  }

  #carousel .right-arrow {
    right: 0;
  }

  #carousel .right-arrow span {
    right: 0;
  }

  #carousel .right-arrow span:first-of-type {
    top: 0;
    transform: rotateZ(45deg);
    transform-origin: left;
  }

  #carousel .right-arrow span:last-of-type {
    bottom: 0;
    transform: rotateZ(-45deg);
    transform-origin: left;
  }

</style>

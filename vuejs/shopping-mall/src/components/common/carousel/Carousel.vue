<template>
  <div id="carousel">
    <div class="carousel-items-wrapper" :style="slideLeft">
      <slot></slot>
    </div>
    <ul v-if="!noIndicator" class="indicator">
      <li v-for="count in numOfItems">
        <a href="javascript:;"
           @click="clickIndicator(count-1)"
           :class="{active: currentIndex == count - 1}"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {
        left: 0,
        numOfItems: 0,
        loopTimer: null,
        slideTimer: null,
        currentIndex: 0,
        width: 300
      }
    },
    props: {
      stopInterval: {
        type: Number,
        default: 2000
      },
      slideInterval: {
        type: Number,
        default: 30
      },
      noIndicator: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      slideLeft() {
        if (this.left <= -(this.numOfItems) * 300) {
          this.left = 0;
        }
        return {'left': this.left + "px"}
      }
    },
    created() {
      this.autoSlide();
    },
    beforeDestroy() {
      clearInterval(this.loopTimer)
      clearInterval(this.slideTimer)
    },
    mounted() {
      this.numOfItems = this.$children.length;
      const carouselItemWrapper = document.querySelector('.carousel-items-wrapper');
      const carouselItems = document.querySelectorAll('.carousel-item');
      if(carouselItems.length > 1) {
        const firstItem = carouselItems[0].cloneNode(true);
        // const lastItem = carouselItems[carouselItems.length - 1].cloneNode(true);
        carouselItemWrapper.appendChild(firstItem);
      }
    },
    methods: {

      moveTo(destinationIndex) {

        if (destinationIndex > this.numOfItems) {
          this.currentIndex = 0;
          destinationIndex = 1;
        }

        const from = -this.width * this.currentIndex;
        const to = -this.width * destinationIndex;
        const distance = to - from;
        const step = distance / this.slideInterval;

        clearInterval(this.slideTimer)

        this.slideTimer = setInterval(() => {

          let newValue = this.left + step;
          if (distance > 0 && newValue >= to || distance < 0 && newValue <= to) {
            newValue = to;
          }

          this.left = newValue;

          if (this.left == to) {
            clearInterval(this.slideTimer);
            this.currentIndex = destinationIndex;
            if(this.currentIndex == this.numOfItems) {
              this.currentIndex = 0;
            }
          }
        }, this.slideInterval)

      },

      clickIndicator(index) {
        this.moveTo(index);
        clearInterval(this.loopTimer)
        setTimeout(() => {
          this.autoSlide()
        }, this.stopInterval)
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
    width: 300px;
    height: 300px;
    overflow: hidden;
  }

  .carousel-items-wrapper {
    background-color: #000;
    width: 300px;
    display: flex;
    flex-flow: row nowrap;
    position: absolute;
    left: -600px;
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

</style>

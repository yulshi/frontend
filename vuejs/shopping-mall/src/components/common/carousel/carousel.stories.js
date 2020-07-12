import Vue from 'vue'
import {Carousel, CarouselItem} from './index'

export default {title: 'Carousel'}

export const asAComponent = () => ({
  components: { Carousel, CarouselItem },
  template: `
    <carousel>
      <carousel-item>
        <div style="background-color:#f00; height: 100%">LOOP1</div>
      </carousel-item>
      <carousel-item>
        <div style="background-color:#0f0; height: 100%">LOOP2</div>
      </carousel-item>
      <carousel-item>
        <div style="background-color:#00f; height: 100%">LOOP3</div>
      </carousel-item>
      <carousel-item>
        <div style="background-color:#ff0; height: 100%">LOOP4</div>
      </carousel-item>
      <carousel-item>
        <div style="background-color:#0ff; height: 100%">LOOP5</div>
      </carousel-item>
    </carousel>`
});

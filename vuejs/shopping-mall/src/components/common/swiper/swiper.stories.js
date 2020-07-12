import Vue from 'vue'
import {Swiper, SwiperItem} from './index'

export default {title: 'Swiper'}

export const asAComponent = () => ({
  components: { Swiper, SwiperItem },
  template: `
    <swiper>
      <swriper-item>
        <div style="background-color:#f00; height: 100%">LOOP1</div>
      </swriper-item>
      <swriper-item>
        <div style="background-color:#0f0; height: 100%">LOOP2</div>
      </swriper-item>
      <swriper-item>
        <div style="background-color:#00f; height: 100%">LOOP3</div>
      </swriper-item>
      <swriper-item>
        <div style="background-color:#ff0; height: 100%">LOOP4</div>
      </swriper-item>
      <swriper-item>
        <div style="background-color:#0ff; height: 100%">LOOP5</div>
      </swriper-item>
    </swiper>`
});

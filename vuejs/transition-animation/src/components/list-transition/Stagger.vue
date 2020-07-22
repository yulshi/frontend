<template>
  <div class="stagger">
    <input name="name" v-model="query" autocomplete="off">
    <transition-group name="stagger-trans"
                      tag="ul"
                      class="name-list"
                      :css="false"
                      @before-enter="handleBeforeEnter"
                      @enter="handleEnter"
                      @leave="handleLeave">
      <li v-for="(item,index) in queryList"
          :key="item"
          :data-index="index"
          class="list-item">
        {{item}}
      </li>
    </transition-group>
  </div>
</template>

<script>
  import Velocity from 'velocity-animate'

  export default {
    name: "Stagger",
    data: function () {
      return {
        query: '',
        list: [
          'Bruce Lee',
          'Jet Li',
          'Bruce Will',
          'Kung Furry',
          'Jackie Chen'
        ]
      }
    },
    computed: {
      queryList: function () {
        return this.list.filter(item => item.toLowerCase().indexOf(this.query.toLowerCase()) !== -1)
      }
    },
    methods: {
      handleBeforeEnter(el) {
        el.style.opacity = 0
        el.style.height = 0
      },
      handleEnter(el, done) {
        // dataset is related to 'data-index' set on <li> above
        const delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
              el,
              {opacity: 1, height: '1.6em'},
              {complete: done}
          )
        }, delay)
      },
      handleLeave(el, done) {
        var delay = el.dataset.index * 150
        setTimeout(function () {
          Velocity(
              el,
              {opacity: 0, height: 0},
              {complete: done}
          )
        }, delay)
      }
    }
  }
</script>

<style scoped>
  .name-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .list-item {
    line-height: 1.6em;
  }

  /*.list-item {*/
  /*  transition: all 1s;*/
  /*}*/

  /*.stagger-trans-enter,*/
  /*.stagger-trans-leave-to {*/
  /*  opacity: 0;*/
  /*}*/

</style>
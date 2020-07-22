<template>
  <div class="tab-control">
    <ul class="title-list">
      <li v-for="(title, index) in titles"
          class="title-item"
          :class="{active: index === currentIndex}"
          @click="switchTab(index)">
        <span>{{title}}</span>
      </li>
    </ul>
    <div>
      <transition name="tab-trans"
                  appear
                  mode="out-in">
        <component :is="view"/>
      </transition>
    </div>
  </div>
</template>

<script>
  import CompA from "./sub-comps/CompA";
  import CompB from "./sub-comps/CompB";
  import CompC from "./sub-comps/CompC";

  export default {
    name: "TabControl",
    data: function () {
      return {
        currentIndex: 0,
        view: 'comp-a'
      }
    },
    props: {
      titles: {
        type: Array,
        default: function () {
          return ['title1', 'title2', 'title3']
        }
      }
    },
    components: {
      'comp-a': CompA,
      'comp-b': CompB,
      'comp-c': CompC
    },
    methods: {
      switchTab: function (index) {
        this.currentIndex = index;
        switch (this.currentIndex) {
          case 0:
            this.view = 'comp-a'
            break
          case 1:
            this.view = 'comp-b'
            break
          case 2:
            this.view = 'comp-c'
            break
        }
      }
    }
  }
</script>

<style scoped>

  .title-list {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    padding: 0;
    margin-bottom: 20px;
    list-style: none;
  }

  .title-item {
    flex: 1;
    text-align: center;
  }

  .title-item span {
    padding: 3px 5px;
    cursor: pointer;
  }

  .active span {
    border-bottom: 1px solid #5c6b77;
  }

  .tab-trans-enter-active,
  .tab-trans-leave-active {
    transition: all .5s;
  }

  .tab-trans-enter,
  .tab-trans-leave-to {
    /*opacity: 0;*/
    transform: rotateY(90deg);
  }

</style>
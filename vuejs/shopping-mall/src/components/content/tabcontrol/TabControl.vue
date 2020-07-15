<template>
  <ul class="tab-control">
    <li v-for="(item, index) in titles"
        class="tab-control-item"
        :class="{active: index === currentIndex}"
        @click="itemClick(index)"
        :key="index">
      <span>{{item}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      titles: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('click-tab', index)
      }
    }
  }
</script>

<style scoped>

  .tab-control {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
    line-height: 44px;
  }

  .tab-control-item {
    flex: 1;
  }

  .tab-control-item span {
    color: var(--color-text);
    padding: 5px;
    cursor: pointer;
  }

  .tab-control-item.active span {
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }

</style>

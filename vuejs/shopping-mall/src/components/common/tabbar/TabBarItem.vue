<template>
  <div class="tabbar-item" @click="route2Page">
    <div v-if="!isActive" class="item-icon">
      <slot name="item-icon"></slot>
    </div>
    <div v-else class="item-icon">
      <slot name="item-icon-active"></slot>
    </div>
    <div class="item-title" :style="activeColor">
      <slot name="item-title"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      link: String,
      textActiveColor: {
        type: String,
        default: '#ff8198'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.link) != -1;
      },
      activeColor() {
        return this.isActive ? 'color: ' + this.textActiveColor : '';
      }
    },
    methods: {
      route2Page() {
        this.isActive || this.$router.push(this.link)
      }
    }
  }
</script>

<style scoped>

  .tabbar-item {
    flex: 1;
    text-align: center;
    margin-top: 2px;
  }

  .tabbar-item img {
    height: 26px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

  .tabbar-item .item-title {
    font-size: 14px;
  }

</style>

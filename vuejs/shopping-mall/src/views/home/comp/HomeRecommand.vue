<template>
  <div class="home-recommand">
    <a href="javascript:;">
      <img src="~assets/img/home/recommend_bg.jpg" alt="recommand" @load="imgLoaded">
    </a>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommand",
    methods: {
      imgLoaded() {
        this.$emit('imgLoaded');
      }
    }
  }
</script>

<style scoped>

  .home-recommand img {
    width: 100%;
  }

</style>

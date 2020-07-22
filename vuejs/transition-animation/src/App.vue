<template>
  <div id="app">
    <h1>Hello Vue</h1>
    <div class="router-links">
      <router-link to="/simple-trans">Simple Transition</router-link>
      <router-link to="/simple-animation">Simple Transition</router-link>
      <router-link to="/simple-velocity">Simple Velocity</router-link>
      <router-link to="/state-button">State Button</router-link>
      <router-link to="/state-table">State Table</router-link>
      <router-link to="/tab-control">Between Components</router-link>
      <router-link to="/numbers">List Transitions - Numbers</router-link>
      <router-link to="/stagger">List Transitions - Stagger</router-link>
    </div>
    <hr/>
    <div class="router-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  .router-links {
    margin: 10px auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }

  .router-links > * {
    width: 100px;
  }

  .router-content {
    margin-top: 20px
  }
</style>

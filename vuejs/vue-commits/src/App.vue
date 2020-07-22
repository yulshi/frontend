<template>
  <div id="app">
    <vue-commit :branches="['master', 'dev', 'test']"/>
  </div>
</template>

<script>

import VueCommit from "./components/VueCommit";
export default {
  name: 'App',
  components: {
    VueCommit
  }
}
</script>

<style>

</style>

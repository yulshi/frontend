<template>
  <div id="app">
    <mark-down/>
  </div>
</template>

<script>

import MarkDown from "./components/MarkDown";
export default {
  name: 'App',
  components: {
    MarkDown
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>

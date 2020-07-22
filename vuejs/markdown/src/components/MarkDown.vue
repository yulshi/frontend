<template>
  <div id="markdown-wrapper">
    <textarea class="editor" :value="inputText" @input="update"/>
    <div class="view" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
  import _ from 'lodash';
  import marked from 'marked';

  export default {
    name: "MarkDown",
    data() {
      return {
        inputText: '# Getting Started',
      }
    },
    computed: {
      compiledMarkdown() {
        return marked(this.inputText)
      }
    },
    methods: {
      // 不能使用箭头函数，因为this将会是undefined
      // 另外，需要直接将_.debounce作为updateView的属性值
      update: _.debounce(function(e) {
        this.inputText = e.target.value;
      }, 300)
    }
  }
</script>

<style scoped>

  #markdown-wrapper {
    display: flex;
  }

  .editor, .view {
    flex: 1;
  }

  .editor {
    margin: 0;
    height: 100vh;
    background-color: #eee;
    color: #000;
    border: none;
    border-right: 1px solid #aaa;
    padding: 5px;
  }

  .view {
    height: 100vh;
    background-color: #fff;
    overflow: auto;
    padding: 5px;
  }

</style>
<template>
  <div id="vue-commit">
    <h1>Latest Vue.js Commits</h1>
    <div>
      <label v-for="branch in branches">
        <input type="radio"
               :name="branch"
               :value="branch"
               :key="branch"
               :id="branch"
               v-model="currentBranch"/>
        {{branch}}
      </label>
    </div>

    <div class="branch-desc">
      <span>vuejs/vue@{{currentBranch}}</span>
    </div>

    <ul class="commits">
      <li v-for="commit in commits">
        <span class="sha">{{commit.sha.substr(0, 7)}}</span>
        -
        <span>{{commit.commit.message | truncate}}</span>
        <div>
          by {{commit.commit.author.name}}
          at {{commit.commit.author.date | formatDate}}
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "VueCommit",
    data() {
      return {
        currentBranch: 'master',
        commits: []
      }
    },
    props: {
      branches: {
        type: Array,
        default() {
          return ['master', 'dev']
        }
      }
    },
    created() {
      this.fetchData()
    },
    watch: {
      currentBranch: 'fetchData'
    },
    filters: {
      truncate(value) {
        const newline = value.indexOf("\n");
        return newline > 0 ? value.slice(0, newline) : value;
      },
      formatDate(value) {
        return value.replace(/[TZ]/g, ' ');
      }
    },
    methods: {
      fetchData() {
        const vm = this;
        const xhr = new XMLHttpRequest();
        xhr.open('get', 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=' + this.currentBranch);
        xhr.onload = function () {
          vm.commits = JSON.parse(xhr.responseText);
          console.log(vm.commits)
        }
        xhr.send();
      }
    }
  }
</script>

<style scoped>

  .commits {
    /*background-color: #bfa;*/
  }

</style>
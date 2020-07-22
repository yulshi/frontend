<template>
  <div class="numbers">
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <button @click="shuffle">Shuffle</button>
    <transition-group appear name="list-trans"
                      tag="p">
      <span v-for="item in items" :key="item" class="item">
        {{item}}
      </span>
    </transition-group>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: "Numbers",
    data: function () {
      return {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
      }
    },
    methods: {
      add(e) {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      },
      remove(e) {
        this.items.splice(this.randomIndex(), 1);
      },
      shuffle() {
        this.items = _.shuffle(this.items)
      },
      randomIndex() {
        return Math.floor(Math.random() * this.items.length);
      }
    }
  }
</script>

<style scoped>

  .item {
    display: inline-block;
    margin-right: 5px;
    transition: all 1s;
  }

  /*.list-trans-enter-active,*/
  /*.list-trans-leave-active {*/
  /*  transition: all 1s;*/
  /*}*/

  .list-trans-enter,
  .list-trans-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-trans-move {
    /*transition: all 1s;*/
    font-size: 2em;
  }

  .list-trans-leave-active {
    position: absolute;
  }

</style>
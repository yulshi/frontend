<template>
  <!--  <transition name="button-title" appear mode="out-in">-->
  <!--    <button v-if="state === 'saved'"-->
  <!--            @click="btnClick"-->
  <!--            key="saved">-->
  <!--      Saved-->
  <!--    </button>-->
  <!--    <button v-else-if="state === 'edited'"-->
  <!--            @click="btnClick"-->
  <!--            key="edited">-->
  <!--      Edited-->
  <!--    </button>-->
  <!--    <button v-else-->
  <!--            @click="btnClick"-->
  <!--            key="editing">-->
  <!--      Editing-->
  <!--    </button>-->
  <!--  </transition>-->
  <!--  <button @click="btnClick" class="state-button">-->
  <!--    <transition name="button-title">-->
  <!--      <span v-if="state === 'saved'" key="saved">-->
  <!--        saved-->
  <!--      </span>-->
  <!--      <span v-else-if="state === 'edited'" key="edited">-->
  <!--        edited-->
  <!--      </span>-->
  <!--      <span v-else key="editing">-->
  <!--        editing-->
  <!--      </span>-->
  <!--    </transition>-->
  <!--  </button>-->
  <button @click="btnClick" class="state-button">
    <transition name="button-title" mode="out-in">
      <span :key="state">
        {{computedTitle}}
      </span>
    </transition>
  </button>
</template>

<script>
  export default {
    name: "StateButton",
    data: function () {
      return {
        state: 'saved'
      }
    },
    computed: {
      computedTitle: function () {
        switch (this.state) {
          case 'saved':
            return 'Edit'
          case 'edited':
            return 'Save'
          case 'editing':
            return 'Cancel'
        }
      }
    },
    methods: {
      btnClick: function (e) {
        if (this.state === 'saved') {
          this.state = 'editing'
        } else if (this.state === 'editing') {
          this.state = 'edited'
        } else {
          this.state = 'saved';
        }
      }
    }
  }
</script>

<style scoped>

  .state-button {
    width: 200px;
    line-height: 1.5em;
    font-size: 1.1rem;
  }

  .state-button span {
    display: inline-block;
  }

  .button-title-enter-active, .button-title-leave-active {
    transition: all 0.5s ease-in-out;
  }

  .button-title-enter, .button-title-leave-to {
    opacity: 0;
    /*transform: rotateY(90deg);*/
  }
</style>
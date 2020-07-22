<template>
  <div>
    <button @click="notEmpty = !notEmpty">toggle</button>
    <hr/>
    <transition name="table-trans" appear mode="out-in">
      <table v-if="notEmpty" class="state-table">
        <thead>
        <tr>
          <th v-for="title in titles">
            {{title}}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="row in data">
          <td v-for="col in row">
            {{col}}
          </td>
        </tr>
        </tbody>
      </table>
      <p v-else class="empty-message">
        There is no content
      </p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "StateTable",
    data: function () {
      return {
        notEmpty: true
      }
    },
    props: {
      titles: {
        type: Array,
        default: function () {
          return ['title1', 'title2', 'title3', 'title4']
        }
      },
      data: {
        type: Array,
        default: function () {
          return [
            ['data11', 'data12', 'data13', 'data14'],
            ['data21', 'data22', 'data23', 'data24'],
            ['data31', 'data32', 'data33', 'data34'],
            ['data41', 'data42', 'data43', 'data44'],
          ]
        }
      }
    },
    computed: {
      // notEmpty: function () {
      //   return false
      // }
    }
  }
</script>

<style scoped>
  .state-table {
    width: 100%;
    border-collapse: collapse;
  }

  .empty-message {
    text-align: center;
  }

  .state-table td,
  .state-table th {
    text-align: left;
    border: 1px solid #aaa;
    height: 2rem;
  }

  .state-table th {
    font-size: 1.2rem;
    background-color: #eee;
  }

  .table-trans-enter-active,
  .table-trans-leave-active {
    transition: all .5s;
  }

  .table-trans-enter,
  .table-trans-leave-to {
    opacity: 0;
    transform: scale(0);
  }

</style>
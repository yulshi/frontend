<template>
  <div class="bottom-bar">
    <div class="bottom-item check-wrapper" @click="checkClick">
      <check-button :checked="checked"/>
      <span>全选</span>
    </div>
    <div class="bottom-item summary">
      <span>合计：</span>
      <span>{{summary | currency}}</span>
    </div>
    <div class="bottom-item calculate">
      <span>去计算（{{count}}）</span>
    </div>
  </div>
</template>

<script>
  import CheckButton from "components/content/check-button/CheckButton";

  export default {
    name: "BottomBar",
    components: {CheckButton},
    props: {
      itemList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      checked() {
        // if (this.itemList.length === 0) return false;
        // return !this.itemList.find(item => !item.checked)
        return !!this.itemList.filter(item => item.checked).length
      },
      summary() {
        return this.itemList.filter(item => item.checked)
          .map(item => item.price * item.count)
          .reduce((prev, curr) => prev + curr, 0);
      },
      count() {
        return this.itemList.filter(item => item.checked)
          .map(item => item.count)
          .reduce((prev, curr) => prev + curr, 0);
      }
    },
    filters: {
      currency(value) {
        return '¥ ' + value.toFixed(2);
      }
    },
    methods: {
      checkClick() {
        if (this.itemList.length === 0) return;
        const allChecked = this.checked;
        this.itemList.forEach(item => item.checked = !allChecked);
      }
    }
  }
</script>

<style scoped>

  .bottom-bar {
    height: 40px;
    background-color: #eee;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-content: space-between;
  }

  .check-wrapper {
    display: flex;
    align-items: center;
    margin: 0 5px;
    width: 70px;
  }

  .summary,
  .calculate {
    flex: 1;
  }

  .summary span:last-of-type {
    font-size: 0.9rem;
    color: var(--color-tint);
  }

  .calculate {
    text-align: right;
    padding-right: 5px;
    background-color: #ff6700;
    line-height: 40px;
    color: #fff;
    font-weight: 600;
  }

</style>

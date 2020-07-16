import BackTop from "components/content/backtop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      showBackTop: false
    }
  },
  methods: {
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    onBackTop(position, limit = 800) {
      this.showBackTop = position.y < -limit;
    }
  }
}

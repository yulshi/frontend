import Vue from 'vue'
import NavBar from "./NavBar";

export default {title: 'NavBar'}

export const asAComponent = () => ({
  components: { NavBar },
  template: `
    <nav-bar>
      <span slot="center">Home</span>
    </nav-bar>`
});

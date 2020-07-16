import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faHome, faUser} from "@fortawesome/free-solid-svg-icons";

// 注册font-awesome组件
library.add(faUser, faHome);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

// 创建一个事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

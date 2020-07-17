import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from "./components/common/toast";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {faHome, faUser} from "@fortawesome/free-solid-svg-icons";
// import FastClick from 'fastclick';
import LazyLoad from 'vue-lazyload'

// 注册font-awesome组件
library.add(faUser, faHome);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

// FastClick.attach(document.body)

// 注册lazyload，懒加载插件
Vue.use(LazyLoad);

// 创建一个事件总线
Vue.prototype.$bus = new Vue();

// 注册toast组件
Vue.use(Toast)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

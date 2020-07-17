import Toast from "./Toast";

export default {
  install: function (Vue) {

    // 获取toast的构造器对象
    const ToastContructor = Vue.extend(Toast);
    // 实例化Toast 对象
    const toast = new ToastContructor();
    // 挂载到一个元素上
    toast.$mount(document.createElement('div'))
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast

  }
}

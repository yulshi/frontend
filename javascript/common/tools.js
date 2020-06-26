/**
 *  得到target的name样式值
 */
function getStyle(target, name) {
  if (window.getComputedStyle) {
    return getComputedStyle(target)[name];
  } else {
    return target.currentStyle[name];
  }
}

/**
 *  获取当前窗口垂直滚动距离
 */
function getScrollTop() {
  return document.documentElement.scrollTop || document.body.scrollTop;
}
/**
 *  获取当前窗口水平滚动距离
 */
function getScrollLeft() {
  return document.documentElement.scrollLeft || document.body.scrollLeft;
}

/**
 * 处理浏览器兼容的绑定事件方法
 * target 事件绑定的对象
 * eventType 事件的类型字符串，比如“click”
 * callback 事件回调函数
 */
function bind(target, eventType, callback) {
  if (target.addEventListener) {
    target.addEventListener(eventType, callback, false);
  } else {
    target.attachEvent("on" + eventType, function () {
      // 在匿名函数中调用callback，这样就有机会传入target
      // 从而改变callback中的this
      callback.call(target);
    });
  }
}

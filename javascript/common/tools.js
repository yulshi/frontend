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

/**
 * 拖拽指定的元素
 * 1、当鼠标在目标元素上按下时，开始拖拽 onmousedown
 * 2、当鼠标移动时，元素跟随鼠标移动    onmousemove
 * 3、当鼠标松开时，元素固定在当前位置  onmouseup
 */
function drag(target) {
  target.onmousedown = function (e) {
    e = e || window.event;

    // for IE8，强制捕获
    target.setCapture && target.setCapture();

    const diffLeft = e.clientX - this.offsetLeft + getScrollLeft();
    const diffTop = e.clientY - this.offsetTop + getScrollTop();

    const originCursor = getStyle(this, "cursor");
    this.style.cursor = "grab";

    document.onmousemove = function (e) {
      e = e || window.event;
      const left = e.clientX;
      const top = e.clientY;

      target.style.left = left - diffLeft + getScrollLeft() + "px";
      target.style.top = top - diffTop + getScrollTop() + "px";
    };

    document.onmouseup = function (e) {
      e = e || window.event;
      document.onmousemove = null;
      document.onmouseup = null;
      target.style.cursor = originCursor;
      // for IE8, 释放捕获
      target.releaseCapture && target.releaseCapture();
    };

    /**
     * 当我们拖拽网页中的内容时，浏览器默认会去搜素引擎中搜索内容
     * 如果不想要这种效果，可以通过return false来取消默认行为
     *
     * 但是这种方法对IE8不起作用
     */
    return false;
  };
}

/**
 * move the element to the destination
 *
 * @param target the target obj to be moved
 * @param attr the style name to operate on. Could be one of "width, height, left, top"
 * @param destination the destination of the movement
 * @param step the step for each move
 * @param callback the callback function be called after stop the move
 */
function move(target, attr, destination, step, callback) {
  // according to the distance to figure out the direction of step
  const currentAttrValue = parseInt(getStyle(target, attr));
  // const distance = destination - currentAttrValue;
  // if (distance === 0) {
  //   // has reached the end, do not move
  //   return;
  // }
  // step = distance > 0 ? step : -step;
  if (currentAttrValue > destination) {
    step = -step;
  }

  // we need to clear the timer to make sure only one time is create.
  clearInterval(target.timer);

  // start the timer to start the move
  target.timer = setInterval(function () {
    // move
    const oldValue = parseInt(getStyle(target, attr));
    let newValue = oldValue + step;

    if (
      (step > 0 && newValue > destination) ||
      (step < 0 && newValue < destination)
    ) {
      newValue = destination;
    }

    target.style[attr] = newValue + "px";

    // stop when the destination is reached
    if (newValue === destination) {
      clearInterval(target.timer);
      callback && callback();
    }
  }, 30);
}

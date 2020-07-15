/**
 * 放抖动函数
 *
 * @param callback
 * @param delay
 * @returns {function(...[*]=)}
 */
export function debounce(callback, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = window.setTimeout(() => {
      callback.apply(this, args);
    }, delay)
  }
}

/**
 * 截流函数
 *
 * @param callback
 * @param delay
 * @returns {function(...[*]=)}
 */
export function throttle(callback, delay = 3000) {
  let timer = null;
  let startTime;
  return function (...args) {
    const now = +new Date();
    if (startTime && now < startTime + delay) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        startTime = now;
        callback.apply(this, args);
      }, delay);
    } else {
      startTime = now;
      callback.apply(this, args);
    }
  }
}

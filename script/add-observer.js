/**
 * 在 this.page.on("load",()) 中调用
 *
 * 页面中加入一个观察者，观察对象是 document.body 根据配置监听变化项判断是否触发回调函数
 * <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver">MutationObserver</a>
 */
let timer;
/**
 * @description 要监视的内容
 * <a href="https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/MutationObserver/observe_2f2addbfa1019c23a6255648d6526387">配置监听的内容</a>
 */
const config = {attributes: true, childList: true, subtree: true};
const callback = function (mutationsList, observer) {
  timer && clearTimeout(timer)
  let isReady;
  isReady = document.getElementById("isReady")
  isReady && document.documentElement.removeChild(isReady)
  // TODO: timeout 时间可以调小点，最小不要低于30ms，等待时间太短有可能页面渲染到一半就触发了
  timer = setTimeout(() => {
    isReady = document.createElement("div")
    isReady.setAttribute("id", "isReady")
    document.documentElement.appendChild(isReady)
  }, 100)
};
const observer = new MutationObserver(callback);
observer.observe(document.body, config);

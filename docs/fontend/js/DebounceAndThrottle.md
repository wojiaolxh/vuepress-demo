<!--
 * @Author: your name
 * @Date: 2021-12-03 13:58:07
 * @LastEditTime: 2021-12-03 14:32:08
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vuepress-starter\docs\fontend\js\debounce.md
-->
# 防抖函数&节流函数

节流函数和防抖函数是 JS 比较重要的概念，应用好了可以提高很大的性能，在面试中也是很高频的一个考点。下面一起来看看这两种方法是如何使用的：

## 防抖函数(debounce):

## 概念：

**在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。**

## 生活中的栗子：

如果有人进电梯（触发事件），那电梯将在 10 秒钟后出发（执行事件），这时如果又有人进电梯了（在 10 秒内再次触发该事件），我们又得等 10 秒再出发（重新计时）。

代码栗子：

```js
/**
 * @description: 防抖函数：函数被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} wait  wait毫秒后执行回调
 * @param {*} ...arr 传递给fn的参数
 */
function debounce(fn, wait, ...arr) {
  let timer = null;
  return () => {
    if (timer) {
      // 如果有一个函数在等待执行 清除定时器 下面重新计时
      clearTimeout(timer);
      timer = null; // 清空timer 下次重启定时器
    }
    // 设定时器/重置定时器
    timer = setTimeout(() => {
      fn(...arr); // wait时间后 执行回调 期间再触发debounce 需要重新等待
    }, wait);
  };
}
// 要防抖的函数
let actionFn = function (a, b) {
  console.log("回调", a, b);
};
setInterval(debounce(actionFn, 500, "actionFn参数1", "参数2"), 1000); // 第一次在1500ms后触发，之后每1000ms触发一次
setInterval(debounce(actionFn, 2000), 1000); // 还没执行就一直重复触发,不会执行
```
> 可以这样理解
> 
> 函数触发停止一段时间后(期间不能再触发 debounce，否则将重新计时)，再执行回调函数



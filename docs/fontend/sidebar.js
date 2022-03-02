/*
 * @Author: your name
 * @Date: 2021-11-29 15:03:47
 * @LastEditTime: 2022-02-10 15:22:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \VuePress\vuepress-starter\docs\.vuepress\slidebar.js
 */
var slidebar=[
  {
    title: 'html', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['html/', '目录'],

      ['html/BrowserInputUrl', '浏览器输入URL'],

    ]
  },
  {
    title: 'css', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['css/', '目录'],
      ['css/BFC', 'CSSBFC'],
      ['css/Flex', 'Flex布局'],


    ]
  },
  {
    title: 'js', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['js/DebounceAndThrottle', '函数防抖和函数节流'],
      ['js/DeclareVariable', 'var和let/const的区别'],
      ['js/ArrowFun', '箭头函数和普通函数的区别'],
      ['js/ArrayApi', '数组Api合集'],
      ['js/DataCache', '浏览器缓存'],
      ['js/RepaintsAndReflow', '重绘和重排'],
      ['js/CallApplyBind', 'call,apply,bind'],
      ['js/BasicType', 'js基本类型和引用数据类型'],
      ['js/Prototype', '原型、原型链'],
    ]
  },
  {
    title: 'vue', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['vue/', '目录'],
      ['vue/DefineGlobalFun', '定义全局函数'],
      ['vue/Vuex', 'Vuex'],
      ['vue/ComponentPassValue', 'Vue组件传值'],

    ]
  },
]

module.exports = slidebar

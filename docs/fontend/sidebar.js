/*
 * @Author: your name
 * @Date: 2021-11-29 15:03:47
 * @LastEditTime: 2021-12-06 15:24:57
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
    

    ]
  },
  {
    title: 'js', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['js/DebounceAndThrottle', '函数防抖和函数节流'],
      ['js/DeclareVariable', 'var和let/const的区别'],
    ]
  },
  {
    title: 'vue', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['vue/', '目录'],
      ['vue/DefineGlobalFun', '定义全局函数'],
     
    ]
  },
]

module.exports = slidebar
/*
 * @Author: your name
 * @Date: 2021-11-29 15:03:47
 * @LastEditTime: 2021-12-03 16:21:48
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
      ['html/html1', 'html1'],
      ['html/html2', 'html2']

    ]
  },
  {
    title: 'css', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
      ['css/', '目录'],
      ['css/css1', 'css1'],
      ['css/css2', 'css2'],

    ]
  },
  {
    title: 'js', // 必要的
    collapsable: true, // 可选的, 默认值是 true,
    children:[
  
      ['js/DebounceAndThrottle', '函数防抖和函数节流'],
      ['js/DebounceAndThrottle', 'var和let/const的区别']
     

    ]
  },
]

module.exports = slidebar
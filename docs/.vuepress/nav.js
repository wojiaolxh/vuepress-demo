/*
 * @Author: your name
 * @Date: 2021-11-29 15:05:13
 * @LastEditTime: 2021-12-03 14:05:20
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \VuePress\vuepress-starter\docs\.vuepress\nav.js
 */

const nav = [ //导航栏配置
  {
    text: '首页',
    link: '/'
  },
  {
    text: '前端积累',
    items: [{
        text: 'html css积累',
        link: '/fontend/html/'
      },
      {
        text: 'javascript积累',
        link: '/fontend/js/DebounceAndThrottle'
      },
      {
        text: 'vue积累',
        link: 'https://github.com/OBKoro1/Brush_algorithm'
      }
    ]
  },
  {
    text: '前端算法',
    link: '/algorithm/'
  }, // 内部链接 以docs为根目录


]
module.exports = nav
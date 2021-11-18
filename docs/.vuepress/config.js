/*
 * @Author: your name
 * @Date: 2021-11-17 19:47:23
 * @LastEditTime: 2021-11-18 18:37:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vuepress-starter\docs\.vuepress\config.js
 */
module.exports ={
  title:'勿忘的博客',
  description: '网站描述',
  head:[
    ['link',{rel:'icon',href:'/avatar.png'}],
  ],
  themeConfig:{
    logo:'/avatar.png',//左上角logo
    nav:[//导航栏配置
      {text:'首页',link:'/'},
      {text:'简书主页',link:'https://www.baidu.com/'},
      { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
      { text: '博客', link: 'http://obkoro1.com/web_accumulate/' }, // 外部链接
/*       // 下拉列表
      {
        text: 'GitHub',
        items: [
          { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
          {
            text: '算法仓库',
            link: 'https://github.com/OBKoro1/Brush_algorithm'
          }
        ]
      }  */
    ],
    sidebar:'auto',//侧边栏配置
    sidebarDepth:2
  }
}
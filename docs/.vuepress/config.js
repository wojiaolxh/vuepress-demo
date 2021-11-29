/*
 * @Author: your name
 * @Date: 2021-11-17 19:47:23
 * @LastEditTime: 2021-11-29 15:28:31
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vuepress-starter\docs\.vuepress\config.js
 */


const themeConfig = require('./themeConfig')
module.exports = {
  title: '勿忘的博客',
  description: '网站描述',
  head: [
    ['link', {
      rel: 'icon',
      href: '/avatar.png'
    }],
  ],
  themeConfig
}
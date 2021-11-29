/*
 * @Author: your name
 * @Date: 2021-11-29 18:46:57
 * @LastEditTime: 2021-11-29 18:49:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \VuePress\vuepress-starter\docs\.vuepress\themeConfig.js
 */
const nav = require('./nav')
const sidebars = require('./slidebar')
const  themeConfig  ={
  logo: '/avatar.png', //左上角logo
  nav ,
  sidebar:sidebars
}
module.exports = themeConfig
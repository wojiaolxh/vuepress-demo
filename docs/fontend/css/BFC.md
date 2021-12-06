<!--
 * @Author: your name
 * @Date: 2021-12-06 14:21:02
 * @LastEditTime: 2021-12-06 14:35:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vuepress-starter\docs\fontend\css\BFC.md
-->
# CSS 概念-BFC 深入浅出
好记性不如烂笔头，研究了一下 BFC，发现里面比较细的东西也是很多的！关于 BFC，很多人可能都听说过 BFC 这个东西，大概知道这是个啥东西，相信很多人对此并没有一个非常细致的了解，本文预计篇幅较长，认真，耐着性子看，应该都能够比较深入的理解 BFC 这个概念的规则、作用以及用法。希望喜欢的朋友可以点个赞，或者关注一波本人，谢谢。

## 什么是BFC 
**所谓的 BFC 就是 css 布局的一个概念，是一块区域，一个环境。** 

### 关于 BFC 的定义：
BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与（在下面有解释）， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。

### 通俗的说:
BFC 可以简单的理解为某个元素的一个 CSS 属性，拥有这个属性的元素对内部元素和外部元素会表现出一些特性，这就是 BFC。

### 触发条件
#### 满足下列条件之一就可触发 BFC
1. 根元素，即 HTML 元素
2. `float`的值不为`none`
3. `overflow`的值不为`visible`
4. `display`的值为`inline-block`、`table-cell`、`table-caption`
5. `position`的值为`absolute`或`fixed`

### BFC的布局规则
* 内部的Box会在垂直方向，一个接一个地放置。
* Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠。
* 每个盒子（块盒与行盒）的margin box的左边，与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
* BFC的区域不会与float box重叠。
* BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
* 计算BFC的高度时，浮动元素也参与计算。




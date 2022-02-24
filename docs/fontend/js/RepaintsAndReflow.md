# 重绘和重排

## 重绘:
### 概念：
当页面中元素样式的改变并不影响它在文档流中的位置时（例如：`color`、`background-color`、`visibility`等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

**重绘不一定导致重排，但重排一定会导致重绘。**
**重排比重绘的代价要更高。**


## 重排:
### 概念：
当DOM的变化影响了元素的几何信息(元素的的位置和尺寸大小)，浏览器需要重新计算元素的几何属性，将其安放在界面中的正确位置，这个过程叫做重排。

会导致回流的操作：
* 页面首次渲染
* 浏览器窗口大小发生改变
* 元素尺寸或位置发生改变
* 元素内容变化（文字数量或图片大小等等）
* 元素字体大小变化
* 添加或者删除可见的DOM元素
* 激活CSS伪类（例如：:hover）
* 查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法：
* `clientWidth`,`clientHeight`,`clientTop`,`clientLeft`
* `offsetWidth`,`offsetHeight`,`offsetTop`,`offsetLeft`
* `scrollWidth`,`scrollHeight`,`scrollTop`,`scrollLeft`
* `scrollIntoView()`,`scrollIntoViewIfNeeded()`
* `getComputedStyle()`
* `getBoundingClientRect()`
* `scrollTo()`

## 如何避免:
###CSS
* 避免使用`table`布局
* 尽可能在`DOM`树的最末端改变`class`
* 避免设置多层内联样式
* 将动画效果应用到`position`属性为`absolute`或`fixed`的元素上。
* 避免使用`CSS`表达式（例如：`calc()`）。

###JavaScript
* 避免频繁操作样式，最好一次性重写`style`属性，或者将样式列表定义为`class`并一次性更改`class`属性。
* 避免频繁操作`DOM`，创建一个`documentFragment`，在它上面应用所有`DOM操作`，最后再把它添加到文档中。
* 也可以先为元素设置`display: none`，操作结束后再把它显示出来。因为在`display`属性为`none`的元素上进行的`DOM`操作不会引发回流和重绘。
* 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
* 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

# Flex布局

#### 概念：
弹性盒子是一种用于按行或按列布局元素的一维布局方法，元素可以膨胀以填充额外的空间，收缩以适应更小的空间，适用于任何元素上，如果一个元素使用了`flex`弹性布局（以下都会简称为：flex布局），则会在内部形成`BFC`，flex布局已经得到了所有浏览器的支持，这意味着，现在就能放心，安全的使用这项技术。

容器和项目各有6个属性，见下图

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ec0832ae135e4feb85ba85cf0b3b23ad~tplv-k3u1fbpfcp-watermark.awebp)
![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a66669c6393749feae1f1515b21e8c6c~tplv-k3u1fbpfcp-watermark.awebp)


## 容器属性
### flex-direction

`flex-direction `属性决定主轴的方向（即项目的排列方向）
```css
flex-direction: row | row-reverse | column | column-reverse
```

* `row`（默认值）：主轴为水平方向，起点在左端。
* `row-reverse`：主轴为水平方向，起点在右端。
* `column`：主轴为垂直方向，起点在上沿。
* `column-reverse`：主轴为垂直方向，起点在下沿。

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0445e883e66742aea92aa42f675dd9d8~tplv-k3u1fbpfcp-watermark.awebp)

### flx-wrap

```css
  flex-wrap: nowrap | wrap | wrap-reverse
  
```

* `nowrap`（默认值）：不换行。
* `wrap`：换行，第一行在上方。
* `wrap-reverse`：换行，第一行在下方。

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b7347d79aed24c40b47f4487b4fb2002~tplv-k3u1fbpfcp-watermark.awebp)


### flex-flow
`flex-flow` 属性是 `flex-direction` 属性和 `flex-wrap` 属性的简写形式，默认值为 `row nowrap`

```css
 flex-flow: <flex-direction>|| <flex-wrap>;
  
```

### justify-content

`justify-content` 属性定义了项目在主轴上的对齐方式
```css
justify-content: flex-start | flex-end | center | space-around | space-between | space-between;
  
```

* `flex-start`（默认值）：左对齐。
* `flex-end`：右对齐。
* `center`：居中。
* `space-around`：每个项目两侧的间隔相等。
* `space-between`：两端对齐，项目之间的间隔都相等。
* `space-evenly`：每个项目的间隔与项目和容器之间的间隔是相等的。

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbc1f587b35248e8ac9e22c2f65e74e1~tplv-k3u1fbpfcp-watermark.awebp)

### align-items
`align-items` 属性定义项目在交叉轴上如何对齐

```css
align-items: flex-start | flex-end | center | baseline | stretch;
  
```
* `flex-start`：交叉轴的起点对齐。
* `flex-end`：交叉轴的终点对齐。
* `center`：交叉轴的中点对齐。
* `baseline`：项目的第一行文字的基线对齐。
* `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d13305de6a04c67b080c2c342949a13~tplv-k3u1fbpfcp-watermark.awebp)

### align-content
`align-content` 属性定义了多根轴线的对齐方式，前提是需要设置flex-wrap: wrap，否则不会有效
```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch;
  
```

* `flex-start`：与交叉轴的起点对齐。
* `flex-end`：与交叉轴的终点对齐。
* `center`：与交叉轴的中点对齐。
* `space-around`：每根轴线两侧的间隔都相等。
* `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
* `stretch`（默认值）：轴线占满整个交叉轴。

![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7aef6b1eaf9242cc99ec31823c8606e6~tplv-k3u1fbpfcp-watermark.awebp)


## 项目属性
### order

`order` 属性定义项目的排列顺序。数值越小，排列越靠前，默认为0，可以是负数。
```css
order: <integer>;  
```
![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d7ef20acc88f4921a18ff148a8a6f207~tplv-k3u1fbpfcp-watermark.awebp)

### flex-grow

`flex-grow` flex容器中剩余空间的多少应该分配给项目，也称为扩展规则。最终的项目的宽度为：自身宽度 + 容器剩余空间分配宽度，flex-grow最大值是1，超过1按照1来扩展
```css
flex-grow: <number>;
/* default 0 */
```
![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/43b5235e6d174f898e8d7b21949be462~tplv-k3u1fbpfcp-watermark.awebp)

###  flex-shrink

`flex-shrink` 属性指定了 flex 元素的收缩规则。flex 元素仅在默认宽度之和大于容器的时候才会发生收缩，其收缩的大小是依据 flex-shrink 的值，默认值是1
```css
flex-shrink: <number>;
/* default 1 */
```

###  flex-basis

`flex-basis` 指定了子项在容器主轴方向上的初始大小，优先级高于自身的宽度width```css
```css
flex-basis: 0 | 100% | auto | <length>
```

###  flex
`flex` 属性是 `flex-grow` , `flex-shrink` 和 `flex-basis` 的简写，默认值为` 0 1 auto `。后两个属性可选。

```css
flex: none | [ <'flex-grow'><'flex-shrink'>? || <'flex-basis'>]

```
###  align-self
`align-self `属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。默认值为 `auto` ，表示继承父元素的 `align-items `属性，如果没有父元素，则等同于 `stretch `。
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;

```
![Image text](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b48825d152e143fa8f633854ac0d2a28~tplv-k3u1fbpfcp-watermark.awebp)








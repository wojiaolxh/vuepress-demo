# 原型、原型链

## prototype
### 只有函数有prototype属性
```js
let a = {}
let b = function () { }
console.log(a.prototype) // undefined
console.log(b.prototype) // { constructor: function(){...} }
```
##### Object.prototype怎么解释？
其实`Object`是一个全局对象，也是一个构造函数，以及其他基本类型的全局对象也都是构造函数：
```js
function outTypeName(data, type) {
    let typeName =  Object.prototype.toString.call(data)
    console.log(typeName)
}
outTypeName(Object) //[object Function]
outTypeName(String) // [object Function]
outTypeName(Number) // [object Function]
```

### 为什么只有函数有prototype属性

JS通过`new`来生成对象，但是仅靠构造函数，每次生成的对象都不一样。
有时候需要在两个对象之间共享属性，由于JS在设计之初没有类的概念，所以JS使用函数的`prototype`来处理这部分**需要被共享的属性**，通过函数的`prototype`来模拟类：
当创建一个函数时，JS会自动为函数添加`prototype`属性，值是一个有`constructor`的对象。
以下是共享属性`prototype`的栗子：
```js
function People(name) {
    this.name = name
}
People.prototype.age = 23 // 岁数
// 创建两个实例
let People1 = new People('OBKoro1')
let People2 = new People('扣肉')
People.prototype.age = 24 // 长大了一岁
console.log(People1.age, People2.age) // 24 24
```
为什么`People1`和`People2`可以访问到`People.prototype.age`？
原因是：`People1`和`People2`的原型是`People.prototype`，答案在下方的：构造函数是什么以及它做了什么。

## 原型链
### `__proto__`和`Object.getPrototypeOf(target)`： 对象的原型
`__proto__`是对象实例和它的构造函数之间建立的链接，它的值是：构造函数的`prototype`。
也就是说：`__proto__`的值是它所对应的原型对象，是某个函数的`prototype`
`Object.getPrototypeOf(target)`全等于`__proto__`。
`Object.getPrototypeOf(target)`（读操作）、`Object.setPrototypeOf(target)`（写操作）、`Object.create(target)`（生成操作）

### 构造函数是什么、它做了什么
所谓的构造函数，实际上就是通过关键字new来调用的函数：
```js
let newObj = new someFn() // 构造调用函数
```
**构造/new调用函数的时候做了什么：**

1,创建一个全新的对象。
2,这个新对象的原型(`Object.getPrototypeOf(target)`)指向构造函数的`prototype`对象。
3,该函数的this会绑定在新创建的对象上。
4,如果函数没有返回其他对象，那么new表达式中的函数调用会自动返回这个新对象。
5,我们称这个新对象为构造函数的实例。

**原型继承就是利用构造调用函数的特性：**
```js
SubType.prototype = new SuperType();  // 原型继承：SubType继承SuperType
SubType.prototype.constructor = SubType // 重新指定constructor指向 方便找到构造函数
// 挂载SuperType的this和prototype的属性和方法到SubType.prototype上
```

1,构造调用的第二点：将新对象的`Object.getPrototypeOf(target)`指向函数的`prototype`
2,构造调用的第三点：该函数的this会绑定在新创建的对象上。
3,新对象赋值给`SubType.prototype`

原型类型有个缺点：多个实例对引用类型的操作会被篡改。

>因为每次实例化引用类型的数据都指向同一个地址，所以它们读/写的是同一个数据，当一个实例对其进行操作，其他实例的数据就会一起更改。
>

### 原型链是什么
```js
function foo() { }
const newObj = new foo() // 构造调用foo 返回一个新对象
const newObj__proto__ = Object.getPrototypeOf(newObj) // 获取newObj的原型对象
newObj__proto__ === foo.prototype // true 验证newObj的原型指向foo
const foo__proto__ = Object.getPrototypeOf(foo.prototype) // 获取foo.prototype的原型
foo__proto__ === Object.prototype // true foo.prototype的原型是Object.prototype

newObj.__proto__.__proto__ // 这种关系就是原型链

```

**可以用以下三句话来理解原型链：**

1,**每个对象都拥有一个原型对象**: `newObj`的原型是`foo.prototype`。

2,**对象的原型可能也是继承其他原型对象的**: `foo.prototype`也有它的原型`Object.prototype`。

3,**一层一层的，以此类推，这种关系就是原型链**

### 一个对象是否在另一个对象的原型链上

>如果一个对象存在另一个对象的原型链上，我们可以说：它们是继承关系。
>

根据构造函数的`prototype`是否在原型链上来判断的：

1,`instanceof`: 用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
语法：`object instanceof constructor`
```js
let test = function () { }
let testObject = new test();
testObject instanceof test // true test.prototype在testObject的原型链上
 testObject instanceof Function // false Function.prototype 不在testObject的原型链上
testObject instanceof Object // true Object.prototype在testObject的原型链上
```

2,`isPrototypeOf`：测试一个对象是否存在于另一个对象的原型链上
语法：`prototypeObj.isPrototypeOf(object)`
```js
let test = function () { }
let testObject = new test();
test.prototype.isPrototypeOf(testObject) // true test.prototype在testObject的原型链上
Object.prototype.isPrototypeOf(testObject) // true Object.prototype在testObject的原型链上
```

### 原型链的终点: `Object.prototype`
`Object.prototype`是原型链的终点，所有对象都是从它继承了方法和属性。
`Object.prototype`**没有原型对象**：
```js
const proto = Object.getPrototypeOf(Object.prototype) // null

```

**字符串原型链的终点**：`Object.prototype`
```js
let test = '由String函数构造出来的'
let stringPrototype = Object.getPrototypeOf(test) // 字符串的原型
stringPrototype === String.prototype // true 字符串的原型是String对象
Object.getPrototypeOf(stringPrototype) === Object.prototype // true String对象的原型是Object对象
```

**函数原型链的终点**：`Object.prototype`
```js
let test = function () { }
let fnPrototype = Object.getPrototypeOf(test)
fnPrototype === Function.prototype // true test的原型是Function.prototype
Object.getPrototypeOf(Function.prototype) === Object.prototype // true
```


### 原型链用来做什么？
##### 属性查找：
>如果试图访问对象(实例instance)的某个属性,会首先在对象内部寻找该属性,直至找不到,然后才在该对象的原型(instance.prototype)里去找这个属性，以此类推
>

```js
let test = '由String函数构造出来的'
let stringPrototype = Object.getPrototypeOf(test) // 字符串的原型
stringPrototype === String.prototype // true 字符串的原型是String对象
Object.getPrototypeOf(stringPrototype) === Object.prototype // true String对象的原型是Object对象
```
当你访问`test`的某个属性时，浏览器会进行以下查找：

1,浏览器首先查找`test` 本身

2,接着查找它的原型对象：`String.prototype`

3,最后查找`String.prototype`的原型对象：`Object.prototype`

4,一旦在原型链上找到该属性，就会立即返回该属性，停止查找。

5,原型链上的原型都没有找到的话，返回`undefiend`

这种查找机制还解释了字符串为何会有自带的方法: `slice`/`split`/`indexOf`等。
* 这些属性和方法是定义在`String`这个全局对象/函数上的。
* 字符串的原型指向了`String`函数的`prototype`。
* 之后通过查找原型链，在`String`函数的`prototype`中找到这些属性和方法

##### 拒绝查找原型链：
`hasOwnProperty`: 指示对象自身属性中是否具有指定的属性

语法：`obj.hasOwnProperty(prop)`

参数: `prop` 要查找的属性

返回值: 用来判断某个对象是否含有指定的属性的`Boolean`。

```js
let test ={ 'OBKoro1': '扣肉' }
test.hasOwnProperty('OBKoro1');  // true
test.hasOwnProperty('toString'); // false test本身没查找到toString 
```
这个`API`是挂载在`object.prototype`上，所有对象都可以使用，API会忽略掉那些从原型链上继承到的属性

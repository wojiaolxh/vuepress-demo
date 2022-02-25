# 箭头函数和普通函数的区别


### 1，箭头函数没有prototype(原型)，所以箭头函数本身没有this
```js
let a = () =>{};
console.log(a.prototype); // undefined
```
### 2. 箭头函数的this指向在定义的时候继承自外层第一个普通函数的this。
```js
let a,
  barObj = { msg: 'bar的this指向' };
fooObj = { msg: 'foo的this指向' };
bar.call(barObj); // 将bar的this指向barObj
foo.call(fooObj); // 将foo的this指向fooObj
function foo() {
  a(); // 结果：{ msg: 'bar的this指向' }
}
function bar() {
  a = () => {
    console.log(this, 'this指向定义的时候外层第一个普通函数'); // 
  }; // 在bar中定义 this继承于bar函数的this指向
}

```

从上面栗子中可以得出两点

**1. 箭头函数没有 arguments箭头函数的this指向定义时所在的外层第一个普通函数，跟使用位置没有关系。**

**2. 被继承的普通函数的this指向改变，箭头函数的this指向会跟着改变**

### 3. 箭头函数没有 arguments
```js
function constant() {
    return () => arguments[0]
}
var result = constant(1);
console.log(result()); // 1
```
那如果我们就是要访问箭头函数的参数呢？

你可以通过命名参数或者 rest 参数的形式访问参数:

```js
let nums = (...nums) => nums;
```
### 4. 不能通过 new 关键字调用
JavaScript 函数有两个内部方法：[[Call]] 和 [[Construct]]。

当通过 new 调用函数时，执行 [[Construct]] 方法，创建一个实例对象，然后再执行函数体，将 this 绑定到实例上。

当直接调用的时候，执行 [[Call]] 方法，直接执行函数体。

箭头函数并没有 [[Construct]] 方法，不能被用作构造函数，如果通过 new 的方式调用，会报错。


```js
var Foo = () => {};
var foo = new Foo(); // TypeError: Foo is not a constructor
```
### 5. 箭头函数不支持new.target
new.target是ES6新引入的属性，普通函数如果通过new调用，new.target会返回该函数的引用。

### 6. 箭头函数不支持重命名函数参数,普通函数的函数参数支持重命名

```js
function func1(a, a) {
  console.log(a, arguments); // 2 [1,2]
}

var func2 = (a,a) => {
  console.log(a); // 报错：在此上下文中不允许重复参数名称
};
func1(1, 2); func2(1, 2);
```


### 7. 箭头函数相对于普通函数语法更简洁优雅：



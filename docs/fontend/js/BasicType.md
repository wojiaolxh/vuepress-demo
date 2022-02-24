# js基本类型和引用数据类型

## 基本类型
* String
* Boolean
* Number
* null
* undefined
* Symbol 

>基本数据类型保存在栈内存中，因为基本数据类型占用空间小、大小固定，通过按值来访问，属于被频繁使用的数据。
>
>

```js
var a = 10 ;
var b = a ;
b = 20 ;
console.log(a); // 10值
```


## 引用数据类型（复杂类型）
* Object
* Array 
* function
* Date


>引用数据类型存储在堆内存中，因为引用数据类型占据空间大、占用内存不固定。 如果存储在栈中，将会影响程序运行的性能； 引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。 当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体
>
>
```js
var obj1 = new Object();
var obj2 = obj1;
obj2.name = "我有名字了";
console.log(obj.name); //我有名字了
```
### 基本数据类型与引用数据类型区别：
基本数据类型存在栈里，引用数据类型在栈里存地址，而在堆里存内容，如果定义数组（对象）m与数组n（）相等，表示地址相同，所以m与n的指针指向同一个内容，改变内容，则m与n都会改变。

## 栈内存和堆内存
### 再来说栈内存和堆内存
**js内存分为栈内存（stack）和堆内存（heap）**

栈内存：是一种特殊的线性表，它具有后进先出的特性，存放基本类型。

堆内存：存放引用类型（在栈内存中存一个基本类型值保存对象在堆内存中的地址，用于引用这个对象)

![Image text](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/1/16/16fae6c92f0345b4~tplv-t2oaga2asx-watermark.awebp)

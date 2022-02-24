# call,apply,bind
## call,apply,bind的基本介绍
#### 语法：
```js
fun.call(thisArg, param1, param2, ...)
fun.apply(thisArg, [param1,param2,...])
fun.bind(thisArg, param1, param2, ...)

```
#### 返回值：
call/apply：`fun`执行的结果 `bind`：返回`fun`的拷贝，并拥有指定的`this`值和初始参数
#### 参数：
`thisArg`(可选):
1,`fun`的`this`指向`thisArg`对象
2,非严格模式下：thisArg指定为null，undefined，fun中的this指向window对象.
3,严格模式下：`fun`的`this`为`undefined`
4,值为原始值(数字，字符串，布尔值)的this会指向该原始值的自动包装对象，如 String、Number、Boolean

`param1,param2`(可选): 传给`fun`的参数。
1,如果param不传或为 null/undefined，则表示不需要传入任何参数.
2,apply第二个参数为数组，数组内的值为传给fun的参数。

### 调用`call`/`apply`/`bind`的必须是个函数

call、apply和bind是挂在Function对象上的三个方法,只有函数才有这些方法。

只要是函数就可以，比如: `Object.prototype.toString`就是个函数，我们经常看到这样的用法：`Object.prototype.toString.call(data)`

### 作用
改变函数执行时的this指向，目前所有关于它们的运用，都是基于这一点来进行的。

#### 如何不弄混call和apply
>弄混这两个API的不在少数，不要小看这个问题，记住下面的这个方法就好了。

`apply `是以`a`开头，它传给`fun`的参数是`Array`，也是以`a`开头的。

### 区别
###### call与apply的唯一区别
传给`fun`的参数写法不同：
* `apply`是第2个参数，这个参数是一个数组：传给`fun`参数都写在数组中。
* `call`从第2~n的参数都是传给`fun`的

###### call/apply与bind的区别
**执行：**
* call/apply改变了函数的this上下文后马上**执行该函数**
* bind则是返回改变了上下文后的函数,**不执行该函数**

**返回值:**
* call/apply 返回`fun`的执行结果
* bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数。






